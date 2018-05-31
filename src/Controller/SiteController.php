<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

use Symfony\Component\HttpFoundation\JsonResponse;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Core\Authentication\Token\AnonymousToken;

use App\Repository\UserRepository;
use App\Entity\User;

class SiteController extends Controller
{
    /**
     * @Route("/site", name="site")
     */
    public function index()
    {
        return $this->render('site/index.html.twig', [
            'controller_name' => 'SiteController',
        ]);
    }


  /**
  * @Route("/login", name="login")
  */
  public function loginAction(Request $request, Session $session)
  {

   

   $error =null; 
     // $response = new JsonResponse(array('data' => 12 ));
     // return $response;

    $form_hash = hash('ripemd160',time()) ;
    $session->getFlashBag()->add('form_crypt', $form_hash);

    if($session->get('error_login')){
      echo " session not null";
      $error = $session->getFlashBag()->get('error_login');
    }
    
    return $this->render('user/login.html.twig', [
        'error' => $error ,
        'form_crypt' => $form_hash
    ]);
  	
     
  }

  /**
  * @Route("/login/api/check", name="login_api_check")
  */
  public function loginCheckApiAction(Request $request, Session $session, UserPasswordEncoderInterface $encoder, UserInterface $userInterface = null ) 
  {
   // var_dump($request);
    $response = new jsonResponse();

    
    $httpRequestOrigin = $request->headers->get('Origin');
    $response->headers->set('Access-Control-Allow-Origin', $httpRequestOrigin);
    $response->headers->set('Access-Control-Allow-Credentials','*');
    $response->headers->set('Access-Control-Allow-Headers', '*');
    $response->headers->set('Access-Control-Expose-Headers', '*');
    $response->headers->set('X-Requested-With', 'XMLHttpRequest');
    $response->headers->set('Access-Control-Request-Method', 'POST, GET, OPTIONS');       
    $response->headers->set("Content-Type", "application/json");  
             
    if($request->request->get('angular_request') == "1" ) {
        // ok token
         $response->setContent(json_encode(array('ng5' => 'request', 'req' => $request->request->get('username'))));
         $entityManager = $this->getDoctrine()->getManager();
         $repository = $this->getDoctrine()->getRepository(User::class);
         $user = $repository->findOneBy(
            array('username' => $request->request->get('username')) 
          );
          $plainPassword = $request->request->get('password');
          if($encoder->isPasswordValid($user, $plainPassword)){


              $user->setIslogin('1');
              $user->setApiToken(hash('md5',time()));
              $entityManager->persist($user);
              $entityManager->flush();
              // $session->set("user_log_id", $user->getId());
              // $session->set("user_log_username", $user->getUsername());
              // $session->set("user_log_name", $user->getName());
              // $session->set("user_log_email", $user->getEmail());
              // $session->set("user_log_token", $user->getApiToken());
              // $session->set('error_login', ' ');
                $response->setContent(json_encode(array('msg' => 'Login for NG Ok', 'bearer' =>  $user->getApiToken(),
                       'user_log_id' => $user->getId(),
                       'user_log_username' => $user->getUsername(),
                       'user_log_role' => $user->getRoles() )
                  ));

          }else{
                $response->setContent(json_encode(array('msg' => 'Invalid credentials', 'error_login' => 1)));

          }
          
         
     


      }else{
         //fetch a fresh token
          $response->setContent(json_encode(array('msg' => 'Access for ng app', 'req' =>  $request->request->get('username'))));
      }
      return $response;

  }


  /**
  * @Route("/login/check", name="login_check")
  */
  public function loginCheckAction(Request $request, Session $session, UserPasswordEncoderInterface $encoder, UserInterface $userInterface = null ) 
  {
  //if form hash match with session crypt ok 
  
  // $u = $request->request->get('form_user');
  // $p = $request->request->get('form_password');
   $crypt = array(); 
   $crypt = $session->getFlashBag()->get('form_crypt');
   $length = count($crypt)-1; $key = $crypt[$length]; 
   $hash_fromform = $request->request->get('form_hash');
    if(in_array($request->request->get('form_hash'), $crypt,true) || $key ==  $hash_fromform ){
      // ok token
    }else{
      // echo " Security toke was hacked "; or you may have not fetch a fresh token
      return $this->redirectToRoute('login'); // this might get error later

    }
   $entityManager = $this->getDoctrine()->getManager();
   $repository = $this->getDoctrine()->getRepository(User::class);
   $user = $repository->findOneBy(
      array('username' => $request->request->get('username')) 
    );
    var_dump($user);
    echo " == = = === ";
    $plainPassword = $request->request->get('password');
    if($encoder->isPasswordValid($user, $plainPassword)){
      // password is valid 
     
      $user->setIslogin('1');
      // $user->setApiToken(hash('md5',time()));
      $entityManager->persist($user);
      $entityManager->flush();
      $session->set("user_log_id", $user->getId());
      $session->set("user_log_username", $user->getUsername());
      $session->set("user_log_name", $user->getUsername());
      $session->set("user_log_email", $user->getEmail());
      $session->set("user_log_token", $user->getApiToken());
      $session->set('error_login', ' ');
      //  sometimes flashbag is not working so set it to null
      echo "paradisiacal===========";
      return $this->redirectToRoute('admin');
       //return $this->forward('App\Controller\SiteController::adminAction');
    }else{
         
      $request->getSession()
        ->getFlashBag()
        ->add('error_login', 'Wrong password or username');
      //  sometimes flashbag is not working
      //  $session->getFlashBag->add('error_login', 'Your credentials are invalid.');
      $session->set('error_login', 'Wrong password or username');
    
      //  return $this->forward('App\Controller\SiteController::loginAction');
      return $this->redirectToRoute('login');
    }

     // echo password_hash($request->request->get('form_hash') , PASSWORD_BCRYPT);
    $response = new JsonResponse(array('data' => 'loginCheckAction'));
    return $response;
    
     
  }

  /**
  * @Route("/logout", name="logout")
  */
  public function logoutAction(Request $request,Session $session, UserInterface $userInterface = null) 
  {	     
      //  $token = new AnonymousToken(hash('md5',time()."asdfghhjkl"),$userInterface, 'anon.');
       // $this->get('security.context');
      //$this->get('request')->getSession()->invalidate();

      $entityManager = $this->getDoctrine()->getManager();
      $repository = $this->getDoctrine()->getRepository(User::class);
      $user = $repository->findOneBy(
      array('id' => $session->get("user_log_id") ) 
      );
      if($user){
        // if there is still user from session
          try {
            $user->setApiToken("0");
            $user->setIslogin('0');  
            $entityManager->persist($user);      
            $entityManager->flush();
            
            $session->invalidate(); 
          } catch (Exception $e) {
            
          }
      }
      return $this->redirectToRoute('login');
       
  }

   /**
  * @Route("/admin", name="admin")
  */
  public function adminAction(Request $request, Session $session = null): JsonResponse
  {

  	// $user = $this->getUser();  // thisis not working	 
    var_dump($session->get("user_log_email"));
    var_dump($session->get("user_log_name"));
     $response = new JsonResponse(array('data' => 123 ));
     return $response;
  	 
  }
  
}

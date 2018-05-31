<?php

namespace App\Controller;

use App\Entity\Book;
use App\Entity\Genre;
use App\Entity\librarysection;
use App\Form\BookType;
use App\Repository\BookRepository;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Authorization\AuthorizationCheckerInterface;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Component\Security\Core\User\UserInterface;
use Doctrine\ORM\Query\ResultSetMapping;
use Doctrine\ORM\Query;
use Doctrine\DBAL\Connection;


/**
 * @Route("/book")
 */
class BookController extends Controller
{
     
    /**
     * @Route("/", name="book_index", methods="GET")
     */
    public function index(BookRepository $bookRepository): Response
    { 
         $repository = $this->getDoctrine()->getRepository(Book::class);
            
       
         
        return $this->render('book/index.html.twig', ['books' => $repository->findAll()]);
    }

    /**
     * @Route("/api/delete/", name="book_api_delete", methods="POST|GET")
     */
    public function delete_api(Request $request, Session $session): Response
    {  
        $repository = $this->getDoctrine()->getRepository(Book::class);
                  
        $id = $request->request->get('id');
        $token = $request->request->get('token');
        $book = $repository->findOneBy(
          array('id' => $id ) 
        );


        $repository = $this->getDoctrine()->getRepository(Book::class);
        $response = new jsonResponse();
        $httpRequestOrigin = $request->headers->get('Origin');
        $response->headers->set('Access-Control-Allow-Origin',  $httpRequestOrigin);
        $response->headers->set('Access-Control-Allow-Credentials','*');
        $response->headers->set('Access-Control-Allow-Headers', '*');
        $response->headers->set('Access-Control-Expose-Headers', '*');
        $response->headers->set('X-Requested-With', 'XMLHttpRequest');
        $response->headers->set('Access-Control-Request-Method', 'POST, GET, OPTIONS');

        $em = $this->getDoctrine()->getManager();
        $em->remove($book);
        $em->flush();

        $response->headers->set("Content-Type", "application/json");  
       
        $response->setContent(json_encode(["ok"=>1]));
        
        return $response;
    }
     /**
     * @Route("/api/borrow/", name="book_api_borrow", methods="POST|GET")
     */
    public function borrow_api(Request $request, Session $session): Response
    {   //var_dump($this->getUser());
        $repository = $this->getDoctrine()->getRepository(Book::class);
                  
        $id = $request->request->get('id');
        $token = $request->request->get('token');

        

        $repository = $this->getDoctrine()->getRepository(Book::class);
        $response = new jsonResponse();
        $httpRequestOrigin = $request->headers->get('Origin');
        $response->headers->set('Access-Control-Allow-Origin',  $httpRequestOrigin);
        $response->headers->set('Access-Control-Allow-Credentials','*');
        $response->headers->set('Access-Control-Allow-Headers', '*');
        $response->headers->set('Access-Control-Expose-Headers', '*');
        $response->headers->set('X-Requested-With', 'XMLHttpRequest');
        $response->headers->set('Access-Control-Request-Method', 'POST, GET, OPTIONS');
        
        // # query    
        $book = new Book();
        $book = $repository->findOneBy(
          array('id' =>  $id) 
        );
         
         $book->setIsBorrowed(true);
         $em = $this->getDoctrine()->getManager();
          
         $result = $em->persist($book);
         
         $em->flush();    

         
        $response->headers->set("Content-Type", "application/json");  
       
        $response->setContent(json_encode(["setIsBorrowed" =>"ok", "value" => $book->getIsBorrowed() ]));
        
        return $response;
    }

    /**
     * @Route("/api/edit/", name="book_api_edit", methods="POST|GET")
     */
    public function edit_api(Request $request, Session $session): Response
    {   //var_dump($this->getUser());
        $repository = $this->getDoctrine()->getRepository(Book::class);
                  
        $id = $request->request->get('id');
        $form = json_decode( $request->request->get('form') , true);
        $token = $request->request->get('token');

        

        $repository = $this->getDoctrine()->getRepository(Book::class);
        $response = new jsonResponse();
        $httpRequestOrigin = $request->headers->get('Origin');
        $response->headers->set('Access-Control-Allow-Origin',  $httpRequestOrigin);
        $response->headers->set('Access-Control-Allow-Credentials','*');
        $response->headers->set('Access-Control-Allow-Headers', '*');
        $response->headers->set('Access-Control-Expose-Headers', '*');
        $response->headers->set('X-Requested-With', 'XMLHttpRequest');
        $response->headers->set('Access-Control-Request-Method', 'POST, GET, OPTIONS');
        
        // # query    
        $book = new Book();
        $book = $repository->findOneBy(
          array('id' =>  $form['book_id']) 
        );
         $author = filter_var($form['author']."", FILTER_SANITIZE_STRING);
         $title = filter_var($form['title']."", FILTER_SANITIZE_STRING);
         $genre = filter_var($form['genre_id']."", FILTER_SANITIZE_STRING);
         $section = filter_var($form['section_id']."", FILTER_SANITIZE_STRING);
         $genre_entity = new Genre();

         $genre_entity = $this->getDoctrine()->getRepository(Genre::class)->findOneBy(array('id'=>$genre))  ;
         $section_entity = $this->getDoctrine()->getRepository(Librarysection::class)->findOneBy(array('id'=>$section))  ;       
         $book->setAuthor($author);
         $book->setTitle($title);
         $book->setGenre($genre_entity);
         $book->setLibrarysection($section_entity);
         $em = $this->getDoctrine()->getManager();
          
         $result = $em->persist($book);
         $em->flush();
         $new_book = $repository->createQueryBuilder('a')
                ->andWhere('a.id = :val')
                ->setParameter('val', $id)
                ->orderBy('a.id', 'ASC')
                ->setMaxResults(1)
                ->getQuery()
                ->getArrayResult();

         
         
        $response->headers->set("Content-Type", "application/json");  
       
        $response->setContent(json_encode(["book"=> $new_book,"token"=> $id, "form" =>$author." - ". $title ]));
        
        return $response;
    }
     /**
     * @Route("/api/get/one/", name="book_api_get_one", methods="GET|POST")
     */
    public function get_one_api(Request $request, Session $session): Response
    {   //var_dump($this->getUser());
        $repository = $this->getDoctrine()->getRepository(Book::class);
                  
        $id = $request->request->get('id');
        $token = $request->request->get('token');

        

        $repository = $this->getDoctrine()->getRepository(Book::class);
        $response = new jsonResponse();
        $httpRequestOrigin = $request->headers->get('Origin');
        $response->headers->set('Access-Control-Allow-Origin',  $httpRequestOrigin);
        $response->headers->set('Access-Control-Allow-Credentials','*');
        $response->headers->set('Access-Control-Allow-Headers', '*');
        $response->headers->set('Access-Control-Expose-Headers', '*');
        $response->headers->set('X-Requested-With', 'XMLHttpRequest');
        $response->headers->set('Access-Control-Request-Method', 'POST, GET, OPTIONS');
           
       
        $sql="SELECT b.*, b.id as book_id, g.* , l.id as section_id,  g.name as genre , l.name as section FROM book b INNER JOIN genre g ON b.genre_id = g.id INNER JOIN librarysection l ON b.librarysection_id = l.id WHERE b.id =?";
        $em = $this->getDoctrine()->getManager();
        $result = $em->getConnection()->fetchAll($sql,[$id],['integer']);



        $response->headers->set("Content-Type", "application/json");  
       
        $response->setContent(json_encode(["book"=>$result,"token"=> $token]));
        
        return $response;
    }
    /**
     * @Route("/api/list/", name="book_api_index", methods="GET|POST")
     */
    public function index_api(Request $request, Session $session): Response
    {   

        $sql="SELECT b.*, b.id as book_id, g.* , l.id as section_id,  g.name as genre , l.name as section FROM book b INNER JOIN genre g ON b.genre_id = g.id INNER JOIN librarysection l ON b.librarysection_id = l.id";
        $em = $this->getDoctrine()->getManager();
        $result = $em->getConnection()->fetchAll($sql);

        $response = new jsonResponse();
        $allowed_site = array("http://localhost:4200","http://127.0.0.1:4200");

        $origin = $request->headers->get('Origin');
        $client = $allowed_site[0];
        if(in_array($origin,$allowed_site) == true){
             $client  = $origin;

        }else{
            // if $origin !== $client set msg not allowed access
        }
       
        $response->headers->set('Access-Control-Allow-Origin',  $client);
        $response->headers->set('Access-Control-Allow-Credentials','*');
        $response->headers->set('Access-Control-Allow-Headers', '*');
        $response->headers->set('Access-Control-Expose-Headers', '*');
        $response->headers->set('X-Requested-With', 'XMLHttpRequest');
        $response->headers->set('Access-Control-Request-Method', 'POST, GET, OPTIONS');
       
         
        $response->headers->set("Content-Type", "application/json");  
       
        $response->setContent(json_encode([$result, "url" => $origin]));
        
       
        return $response;
    }
     /**
     * @Route("/api/new/", name="book_api_new", methods="GET|POST")
     */
    public function new_api(BookRepository $bookRepository, Request $request): Response
    {   //var_dump($this->getUser());
        $repository = $this->getDoctrine()->getRepository(Book::class);
                  
        $form = json_decode( $request->request->get('form') , true);
        $token = $request->request->get('token');

        

        $repository = $this->getDoctrine()->getRepository(Book::class);
        
        $response = new jsonResponse();
        $httpRequestOrigin = $request->headers->get('Origin');
        $response->headers->set('Access-Control-Allow-Origin',  $httpRequestOrigin);
        $response->headers->set('Access-Control-Allow-Credentials','*');
        $response->headers->set('Access-Control-Allow-Headers', '*');
        $response->headers->set('Access-Control-Expose-Headers', '*');
        $response->headers->set('X-Requested-With', 'XMLHttpRequest');
        $response->headers->set('Access-Control-Request-Method', 'POST, GET, OPTIONS');
        
        // # query    
        $book = new Book();
        
         $author = filter_var($form['author']."", FILTER_SANITIZE_STRING);
         $title = filter_var($form['title']."", FILTER_SANITIZE_STRING);
         $section = filter_var($form['section']."", FILTER_SANITIZE_STRING);
         $genre = filter_var($form['genre']."", FILTER_SANITIZE_STRING);

         $genre_entity = $this->getDoctrine()->getRepository(Genre::class)->findOneBy(array('id'=>$genre))  ;
         $section_entity = $this->getDoctrine()->getRepository(Librarysection::class)->findOneBy(array('id'=>$section))  ;       

         $book->setAuthor($author);
         $book->setTitle($title);
         $book->setImg('https://images-na.ssl-images-amazon.com/images/I/51ttBHCU49L._SX305_BO1,204,203,200_.jpg');
         $book->setIsBorrowed(0);
         $book->setGenre($genre_entity);
         $book->setLibrarysection($section_entity);
         $em = $this->getDoctrine()->getManager();
         $result = $em->persist($book);
         $em->flush();
           
         
         $response->headers->set("Content-Type", "application/json");  
       
         $response->setContent(json_encode(["book"=> $form['genre'] ." - " . $form['section'],"token"=> $author." - ".$title ." + ". $section , "form" =>"hhhhhhi".$httpRequestOrigin ]));
        
        return $response;
    }
    /**
     * @Route("/new", name="book_new", methods="GET|POST")
     */
    public function new(Request $request): Response
    {
        $book = new Book();
        $form = $this->createForm(BookType::class, $book);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($book);
            $em->flush();

            return $this->redirectToRoute('book_index');
        }

        return $this->render('book/new.html.twig', [
            'book' => $book,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="book_show", methods="GET")
     */
    public function show(Book $book): Response
    {
        return $this->render('book/show.html.twig', ['book' => $book]);
    }
    /**
     * @Route("/{id}/show", name="book_api_show", methods="GET|POST")
     */
    public function show_api(Book $book): JsonResponse
    {

    /*  
            if( $user->getApiToken() == $request->request->get('api') ){


            }
        */
        $fetched = $repository->createQueryBuilder('a')->getQuery()->getArrayResult();
        $response = new JsonResponse( array("book" => $fetched) );

        return $response;
    }

    
    /**
     * @Route("/{id}/edit", name="book_edit", methods="GET|POST")
     */
    public function edit(Request $request, Book $book): Response
    {
        $form = $this->createForm(BookType::class, $book);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('book_edit', ['id' => $book->getId()]);
        }

        return $this->render('book/edit.html.twig', [
            'book' => $book,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="book_delete", methods="DELETE")
     */
    public function delete(Request $request, Book $book): Response
    {
        if ($this->isCsrfTokenValid('delete'.$book->getId(), $request->request->get('_token'))) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($book);
            $em->flush();
        }

        return $this->redirectToRoute('book_index');
    }
}

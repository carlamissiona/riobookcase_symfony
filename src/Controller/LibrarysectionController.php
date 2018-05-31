<?php

namespace App\Controller;

use App\Entity\Librarysection;
use App\Form\LibrarysectionType;
use App\Repository\LibrarysectionRepository;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

use Symfony\Component\HttpFoundation\Session\Session;

/**
 * @Route("/librarysection")
 */
class LibrarysectionController extends Controller
{
    /**
     * @Route("/", name="librarysection_index", methods="GET")
     */
    public function index(LibrarysectionRepository $librarysectionRepository): Response
    {
        return $this->render('librarysection/index.html.twig', ['librarysections' => $librarysectionRepository->findAll()]);
    }

    /**
     * @Route("/api/list/", name="section_api_index", methods="GET|POST")
     */
    public function index_api(Request $request, Session $session): Response
    {   

        $sql="SELECT * from librarysection";
        $em = $this->getDoctrine()->getManager();
        $result = $em->getConnection()->fetchAll($sql);


  
        $response = new jsonResponse();
 
          
            $httpRequestOrigin = $request->headers->get('Origin');
            $response->headers->set('Access-Control-Allow-Origin',  $httpRequestOrigin);
            $response->headers->set('Access-Control-Allow-Credentials','*');
            $response->headers->set('Access-Control-Allow-Headers', '*');
            $response->headers->set('Access-Control-Expose-Headers', '*');
            $response->headers->set('X-Requested-With', 'XMLHttpRequest');
            $response->headers->set('Access-Control-Request-Method', 'POST, GET, OPTIONS');
           
             
            $response->headers->set("Content-Type", "application/json");  
           
            $response->setContent(json_encode([$result, "url" => $httpRequestOrigin]));
        
       
            return $response;
    }

     

    /**
     * @Route("/new", name="librarysection_new", methods="GET|POST")
     */
    public function new(Request $request): Response
    {
        $librarysection = new Librarysection();
        $form = $this->createForm(LibrarysectionType::class, $librarysection);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($librarysection);
            $em->flush();

            return $this->redirectToRoute('librarysection_index');
        }

        return $this->render('librarysection/new.html.twig', [
            'librarysection' => $librarysection,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="librarysection_show", methods="GET")
     */
    public function show(Librarysection $librarysection): Response
    {
        return $this->render('librarysection/show.html.twig', ['librarysection' => $librarysection]);
    }

    /**
     * @Route("/{id}/edit", name="librarysection_edit", methods="GET|POST")
     */
    public function edit(Request $request, Librarysection $librarysection): Response
    {
        $form = $this->createForm(LibrarysectionType::class, $librarysection);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('librarysection_edit', ['id' => $librarysection->getId()]);
        }

        return $this->render('librarysection/edit.html.twig', [
            'librarysection' => $librarysection,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="librarysection_delete", methods="DELETE")
     */
    public function delete(Request $request, Librarysection $librarysection): Response
    {
        if ($this->isCsrfTokenValid('delete'.$librarysection->getId(), $request->request->get('_token'))) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($librarysection);
            $em->flush();
        }

        return $this->redirectToRoute('librarysection_index');
    }
}

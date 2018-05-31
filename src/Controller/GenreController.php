<?php

namespace App\Controller;

use App\Entity\Genre;
use App\Form\GenreType;
use App\Repository\GenreRepository;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

use Symfony\Component\HttpFoundation\Session\Session;

/**
 * @Route("/genre")
 */
class GenreController extends Controller
{
    /**
     * @Route("/", name="genre_index", methods="GET")
     */
    public function index(GenreRepository $genreRepository): Response
    {
        return $this->render('genre/index.html.twig', ['genres' => $genreRepository->findAll()]);
    }

    /**
     * @Route("/api/list/", name="genre_api_index", methods="GET|POST")
     */
    public function index_api(Request $request, Session $session): Response
    {   

        $sql="SELECT * from genre";
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
     * @Route("/new", name="genre_new", methods="GET|POST")
     */
    public function new(Request $request): Response
    {
        $genre = new Genre();
        $form = $this->createForm(GenreType::class, $genre);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($genre);
            $em->flush();

            return $this->redirectToRoute('genre_index');
        }

        return $this->render('genre/new.html.twig', [
            'genre' => $genre,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="genre_show", methods="GET")
     */
    public function show(Genre $genre): Response
    {
        return $this->render('genre/show.html.twig', ['genre' => $genre]);
    }

    /**
     * @Route("/{id}/edit", name="genre_edit", methods="GET|POST")
     */
    public function edit(Request $request, Genre $genre): Response
    {
        $form = $this->createForm(GenreType::class, $genre);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('genre_edit', ['id' => $genre->getId()]);
        }

        return $this->render('genre/edit.html.twig', [
            'genre' => $genre,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="genre_delete", methods="DELETE")
     */
    public function delete(Request $request, Genre $genre): Response
    {
        if ($this->isCsrfTokenValid('delete'.$genre->getId(), $request->request->get('_token'))) {
            $em = $this->getDoctrine()->getManager() ;
            $em->remove($genre);
            $em->flush();
        }

        return $this->redirectToRoute('genre_index');
    }
}

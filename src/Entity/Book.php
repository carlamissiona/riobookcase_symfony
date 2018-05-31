<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\BookRepository")
 */
class Book
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $title;
    /**
     * @ORM\Column(type="string", length=255)
     */
    private $img;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $author;    

    /**
     * @ORM\Column(type="boolean")
     */
    private $isborrowed;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Genre", inversedBy="books")
     * @ORM\JoinColumn(nullable=true)
     */
    private $genre;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Librarysection", inversedBy="books")
     * @ORM\JoinColumn(nullable=true)
     */
    private $librarysection;

    public function getId()
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getAuthor(): ?string
    {
        return $this->author;
    }

    public function setAuthor(string $author): self
    {
        $this->author = $author;

        return $this;
    }
    public function getImg(): ?string
    {
        return $this->img;
    }

    public function setImg(string $img): self
    {
        $this->img = $img;

        return $this;
    }  

    public function getIsborrowed(): ?bool
    {
        return $this->isborrowed;
    }

    public function setIsborrowed(bool $isborrowed): self
    {
        $this->isborrowed = $isborrowed;

        return $this;
    }

    public function getGenre(): ?Genre
    {
        return $this->genre;
    }

    public function setGenre(?Genre $genre): self
    {
        $this->genre = $genre;

        return $this;
    }

    public function getLibrarysection(): ?Librarysection
    {
        return $this->librarysection;
    }

    public function setLibrarysection(?Librarysection $librarysection): self
    {
        $this->librarysection = $librarysection;

        return $this;
    }
}

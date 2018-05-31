<?php

namespace App\Entity;

use FOS\UserBundle\Model\User as BaseUser;
use Symfony\Component\Security\Core\User\UserInterface;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 */
class User extends BaseUser implements UserInterface
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    protected $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    protected $name;
    
     /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    protected $api_token;

    /**
     * @ORM\Column(type="datetime" ,nullable=true)
     */
    protected $date_created;
 

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    protected $islogin;

    

    public function __construct()
    {
        parent::__construct();
        // your own logic
    }


    public function getId()
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }



    public function getDateCreated(): ?\DateTimeInterface
    {
        return $this->date_created;
    }

    public function setDateCreated(\DateTimeInterface $date_created): self
    {
        $this->date_created = $date_created;

        return $this;
    }
    public function getApiToken(): ?string
    {
        return $this->api_token;
    }

    public function setApiToken(string $apiToken): self
    {
        $this->api_token = $apiToken;

        return $this;
    }

    public function getIslogin(): ?string
    {
        return $this->islogin;
    }

    public function setIslogin(string $islogin): self
    {
        $this->islogin = $islogin;

        return $this;
    }
 

 
}

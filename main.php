<?php
	
	interface ReservableInterface
{
  public function reserver(Client $client, DateTime $dateDebut, int $nbJours): Reservation;

}

abstract class  Vehicule
 {
   protected $id;
   protected $immatriculation;
   protected $marque;
   protected $modele;
   protected $prixJour;
   protected $disponible;
   
   public function __construnct($id,$immatriculation,$marque,$modele,$prixJour,$disponible){
     $this->id=$id;
     $this->immatriculation=$immatriculation;
     $this->marque=$marque;
     $this->modele=$modele;
     $this->prixJour=$prixJour;
     $this->disponible=$disponible;
     
   }
   
   public function afficherDetails(){
     return "l'id: $this->id , Matricul:  $this->immatriculation, Marque: $this->marque, Prix de un jour : $this->prixJour, Disponible: $this->prixJour";
   }
   
   public function calculerPrix(int $jours){
     return $this->prixJour * $jours;
   }
    public function estDisponible(){
      
    }
    public abstract function  getType(); 
   
   
 }
 
 class Voiture extends Vehicule implements ReservableInterface{
    private $nbPortes;
    private $transmission;
    
    public function __construnct($id,$immatriculation,$marque,$modele,$prixJour,$disponible,$nbPortes,$transmission){
      parent::__construnct($id,$immatriculation,$marque,$modele,$prixJour,$disponible);
      $this->nbPortes=$nbPortes;
      $this->transmission= $transmission;
    }
    
    public function reserver(Client $client, DateTime $dateDebut, int $nbJours){
        $reservation=new Reservation($this,Client $client, DateTime $dateDebut, int $nbJours);
      return ;
    }

    public function getType(){
        return $this->marque;
    }

    public function afficherDetails(){
        return "Capacite Tonnage: $this->capaciteTonnage". parent::afficherDetails();
    }
  }

  class Moto extends Vehicule implements ReservableInterface{
    private $cylindree;
    
    public function __construnct($id,$immatriculation,$marque,$modele,$prixJour,$disponible,$cylindree){
        parent::__construnct($id,$immatriculation,$marque,$modele,$prixJour,$disponible);
      $this->cylindree=$cylindree;
    }
    
    public function reserver(Client $client, DateTime $dateDebut, int $nbJours){
      return new Reservation($this, Client $client, DateTime $dateDebut, int $nbJours);
    }

    public function getType(){
        return $this->marque;
    }

    public function afficherDetails(){
        return "Capacite Tonnage: $this->capaciteTonnage". parent::afficherDetails();
    }
  }
  class Camion extends Vehicule implements ReservableInterface{
    private $capaciteTonnage;
    
    public function __construnct($id,$immatriculation,$marque,$modele,$prixJour,$disponible,$capaciteTonnage){
        parent::__construnct($id,$immatriculation,$marque,$modele,$prixJour,$disponible);
      $this->capaciteTonnage=$capaciteTonnage;
    }
    
    public function reserver(Client $client, DateTime $dateDebut, int $nbJours){
      return new Reservation($this, Client $client, DateTime $dateDebut, int $nbJours);
    }

    public function getType(){
        return $this->marque;
    }

    public function afficherDetails(){
        return "Capacite Tonnage: $this->capaciteTonnage". parent::afficherDetails();
    }
  }
  
	
	
	
	
	
?>
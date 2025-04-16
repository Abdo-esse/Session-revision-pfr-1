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
	
	
	
	
	
?>
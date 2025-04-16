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
   protected bool $disponible;
   
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
      return $this->disponible;
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
        $reservation=new Reservation($this, $client,  $dateDebut,  $nbJours);
      return ;
    }

    public function getType(){
        return "Voiture";
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
      return new Reservation($this,  $client,  $dateDebut,  $nbJours);
    }

    public function getType(){
        return "Moto";
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
      return new Reservation($this,  $client,  $dateDebut,  $nbJours);
    }

    public function getType(){
        return "Camion";
    }

    public function afficherDetails(){
        return "Capacite Tonnage: $this->capaciteTonnage". parent::afficherDetails();
    }
  }

  abstract class  Personne{

    protected $nom;
    protected $prenom;
    protected $email;
   
   public function __construnct($nom,$prenom,$email){
     $this->nom=$nom;
     $this->prenom=$prenom;
     $this->email=$email;
     
   }

   public abstract  function afficherProfil();
  }
   class  Client extends Personne {

    
   private $numeroClient;
   private  $reservations ;
   
   public function __construnct($nom,$prenom,$email,$numeroClient,){
    parent::__construnct($nom,$prenom,$email);
    $this->numeroClient=$numeroClient;
  }

  public function ajouterReservation(Reservation $r){
    $this->reservations[]= $r;
  }


   public function afficherProfil(){
    $info= "your name: $this->nom, prenom : $this->prenom, email: $this->email, nemero:  $this->numeroClient ";
    $info.=print_r($this->reservations);
    return $info;
   }
   public function getHistorique(){
    foreach($this->reservations as $reservation){
        if($reservation->getStatus()=="confirmer"){
         echo $reservation."\n";
        }
    }
   }
  }

  
  class Agence{
    private $nom;
    private $ville;
    private array $vehicules ;
    private array $clients  ;

    public function __construnct($nom,$ville){
        $this->nom=$nom;
        $this->ville=$ville;
    }

    public function ajouterVehicule(Vehicule $v){
        $this->vehicules[]=$v;
    }
    public function enregistrerClient(Client $c){
        $this->clients[]=$c;
    }
    public function rechercherVehiculeDisponible(string $type)    {
        foreach($this->vehicules as $vehicule)
        if($vehicule->getType()== $type && $vehicule->estDisponible() ){
            return $vehicule->afficherDetails();
        }
    }

    public function faireReservation(Client $client, Vehicule $v, DateTime $dateDebut, int $nbJours): Reservation{
        return  new Reservation($v, $client,  $dateDebut,  $nbJours);
    }


  }

  class Reservation{
    private $vehicule;
    private $client;
    private $dateDebut;
    private $nbJours;
    private $statut;

    public function __construnct($vehicule, $client, $dateDebut, $nbJours){
          
        $this->vehicule=$vehicule;
        $this->client=$client;
        $this->dateDebut=$dateDebut;
        $this->nbJours=$nbJours;
    }

    public function calculerMontant(){
        return $this->vehicule->calculerPrix($this->nbJours);
    }

    public function confirmer(){
        $this->statut="confirmer";
    }
    public function  annuler(){
        $this->statut="annuler";
    }

    public function getStatus(){
        return $this->statut;
    }

  }
	
	
	
	
?>
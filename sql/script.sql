-- Utilisateurs & Profils
-- 1-Afficher les freelances qui parlent l’anglais (langues.nom = 'Anglais') avec un niveau avancé.
select u.*
FROM utilisateurs u
join profils p on p.utilisateur_id=u.id
join profil_langue pl on pl.profil_id= p.id
join langues l on l.id=pl.langue_id
where u.role='freelance' and  l.nom='Anglais' and pl.niveau='avancé';
-- 2-Lister les freelances ayant plus de 3 compétences.
select u.*,COUNT(pc.profil_id) as coun
FROM utilisateurs u
join profils p on p.utilisateur_id=u.id
join profil_competence pc on pc.profil_id=p.id
GROUP by u.nom
HAVING coun >=3

-- 3-Afficher les freelances disponibles, leur tarif horaire et leur ville.
select u.*,p.tarif_horaire,a.ville
FROM utilisateurs u
join profils p on p.utilisateur_id=u.id
join adresses  a on a.utilisateur_id=u.id
WHERE u.role='freelance' and p.disponible=true
-- 4-Lister tous les utilisateurs qui ne possèdent pas encore de profil.
select u.*
FROM utilisateurs u
RIGHT join profils p on p.utilisateur_id=u.id

-- 5-Afficher les clients qui n'ont jamais publié de projet.
select u.*
From utilisateurs u 
RIGHT join projets p on p.client_id=u.id
-- 6-Afficher les projets ouverts avec leur budget et leur nombre total d’offres reçues.
select p.*,count(o.projet_id) as  nombre_total_d’offres_reçues
from projets p
join offres o on o.projet_id=p.id
WHERE p.statut='ouvert'
-- 7-Lister les offres envoyées par des freelances dont le tarif horaire est inférieur à 100 MAD.
select o.*,p.tarif_horaire
from utilisateurs u 
join profils p on p.utilisateur_id=u.id
JOIN offres o on o.freelance_id=u.id
WHERE p.tarif_horaire<100
-- 8-Afficher les projets qui ont reçu au moins 3 offres
select p.*,count(o.id)
from projets p
join offres o on o.projet_id=p.id
group by p.id
HAVING count(o.id)<3
-- 10-Afficher les projets terminés avec les dates de début et de fin des missions associées.
select o.*,m.date_debut,m.date_fin
from projets p
join offres o on o.projet_id=p.id
join missions m on m.offre_id=o.id
WHERE p.statut='terminé'
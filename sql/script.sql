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
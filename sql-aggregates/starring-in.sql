select  "g"."name" as "genre",
        count("c"."filmId") as "numberOfFilms"
from    "genres" as "g"
join    "filmGenre" using ("genreId")
join    "castMembers" as "c" using ("filmId")
join    "actors" as "a" using ("actorId")
where   "a"."firstName" = 'Lisa'
and     "a"."lastName" = 'Monroe'
group by "g"."name";

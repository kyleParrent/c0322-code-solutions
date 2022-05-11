select  "f"."releaseYear",
        "g"."name" as "genres"
from    "films" as "f"
join    "filmGenre" using ("filmId")
join    "genres" as "g" using  ("genreId")
where   "f"."title" = 'Boogie Amelie';

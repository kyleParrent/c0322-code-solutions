select  "co"."name" as "country",
        count("cit"."name") as "numberOfCities"
from    "countries" as "co"
join    "cities" as "cit" using ("countryId")
group by "co"."countryId";

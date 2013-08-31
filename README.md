# Aim

A Website that shows you your closest Hawker center in Singapore <http://h.dabase.com/>.

# Getting the data

Initially Geocoded [Location of Hawker Centres from 2010](http://data.gov.sg/Metadata/SGMatadata.aspx?id=2609080000000004677W&mid=22069) using [Google Geocode API](https://developers.google.com/maps/documentation/geocoding/):

	geocode.php hawkers.csv > hawkers.txt

# [Onemap](http://www.onemap.sg/index.html) seems a bit of a disaster

After trawling <http://data.gov.sg>, since the earlier source mentioned is
should be updated "Annually", I did find a more uptodate source:

<http://data.gov.sg/Metadata/OneMapMetadata.aspx?id=HAWKERCENTRE&mid=85309&t=SPATIAL>

It seems to refer (with lots of broken JS) to a [OneMap view of Hawker
centers](http://data.gov.sg/common/Map.aspx?Theme=HAWKERCENTRE) which is
astonishingly ugly.

This is where HAWKERCENTRE.kml comes from.

# NEA Hawkers page has the best info

<img src=http://s.natalian.org/2013-08-29/1377742549_1366x768.png>

[NEA Hawkers page](http://www.myhawkers.sg/) sadly has an [unusable hawkers map](http://www.myhawkers.sg/discover).

However it does expose its API and the myhawkers.json is the best information I've seen.

# Improving the map's markers

* Do a pull request on [myhawkers.json](myhawkers.json), since it's what drives the map!
* Include [Kopitiam outlets](http://www.kopitiam.biz/outlet_singapore.html)
* Include places like [Makansutra's glutton bay](http://www.makansutra.com/eateries_stalls.asp)
* Other food courts that seemingly are unlisted like [Peace Food court](https://foursquare.com/v/food-district-food-court/4ca2e813d7c33704c06d9c62). Is it possible to gleam [Food court listing from Foursquare](https://foursquare.com/explore?mode=url&near=Singapore&q=Food%20Court)?

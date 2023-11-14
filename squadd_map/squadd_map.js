
<script>
    mapboxgl.accessToken = 'pk.eyJ1IjoiYWxiZXJ0LSIsImEiOiJjbG15MGczaHQxN3NyMmptenBldWlydjNmIn0.P4ugthXiaieIMwG3kfeH0A';

    
    /**
     * Add the map to the page
     */
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-84.269417, 30.406990],
      zoom: 5,
      scrollZoom: true
    });

    const squadd_instances = {
      'type': 'FeatureCollection',
      'features': [
        {
          'type': 'Feature',
          'geometry': {
            'type': 'Point',
            'coordinates': [-81.5826856, 30.3337075]
          },
          'properties': {
            'phoneFormatted': '(703) 522-2016',
            'phone': '7035222016',
            'address': "<a href='https://www.google.com'>7152 Lone Star Road</a>",
            'city': 'Jacksonville',
            'country': 'United States',
            'crossStreet': 'at N Randolph St.',
            'postalCode': '32211',
            'state': 'Florida',
            'size':'15-25'
          }
        },
        {
          'type': 'Feature',
          'geometry': {
            'type': 'Point',
            'coordinates': [-80.235573,25.793159]
          },
          'properties': {
            'phoneFormatted': '(610) 612-9400',
            'phone': '6106129400',
            'address': "<a href='https://www.google.com'>1901 NW 24th Ave,</a>",
            'city': 'Miami',
            'country': 'United States',
            'postalCode': '33125',
            'state': 'Florida',
            'size':'10-15',
          }
        },
        {
          'type': 'Feature',
          'geometry': {
            'type': 'Point',
            'coordinates': [-84.269417, 30.406990]
          },
          'properties': {
            'phoneFormatted': '(202) 387-9338',
            'phone': '2023879338',
            'address': "<a href='https://www.google.com'>700 Paul Russell Rd,</a>",
            'city': 'Tallahassee',
            'country': 'United States',
            'crossStreet': 'at Dupont Circle',
            'postalCode': '32301',
            'state': 'Florida',
            'size':'5-10'
          }
        },
        {
          'type': 'Feature',
          'geometry': {
            'type': 'Point',
            'coordinates': [-80.196950,25.758290]
          },
          'properties': {
            'phoneFormatted': '(571) 203-0482',
            'phone': '5712030482',
            'address': "<a href='https://www.google.com'>55 SW 17th Rd,</a>",
            'city': 'Miami',
            'country': 'United States',
            'crossStreet': 'btw Explorer & Library',
            'postalCode': '33129',
            'state': 'Florida',
            'size':'10-15'
          }
        },
        {
          'type': 'Feature',
          'geometry': {
            'type': 'Point',
            'coordinates': [-81.449707,28.517099]
          },
          'properties': {
            'phoneFormatted': '(610) 612-9400',
            'phone': '6106129400',
            'address': "<a href='https://www.google.com'>5165 Metrowest Blvd,</a>",
            'city': 'Orlando',
            'country': 'United States',
            'postalCode': '32811',
            'state': 'Florida',
            'size':'10-15',
            
          }
        },
        {
          'type': 'Feature',
          'geometry': {
            'type': 'Point',
            'coordinates': [-84.215424,30.447599]
          },
          'properties': {
            'phoneFormatted': '(571) 203-0482',
            'phone': '5712030482',
            'address': "<a href='https://www.google.com'>443-557 Easterwood Dr,</a>",
            'city': 'Tallahassee',
            'country': 'United States',
            'crossStreet': 'btw Explorer & Library',
            'postalCode': '32311',
            'state': 'Florida',
            'size':'10-15'
          }
        },
        {
          'type': 'Feature',
          'geometry': {
            'type': 'Point',
            'coordinates': [-75.20121216774, 39.954030175164]
          },
          'properties': {
            'phoneFormatted': '(215) 386-1365',
            'phone': '2153861365',
            'address': "<a href='https://www.google.com'>3925 Walnut St</a>",
            'city': 'Philadelphia',
            'country': 'United States',
            'postalCode': '19104',
            'state': 'Pennsylvania',
            'size':'10-15',
          }
        },
        {
          'type': 'Feature',
          'geometry': {
            'type': 'Point',
            'coordinates': [-104.976515,39.764540]
          },
          'properties': {
            'phoneFormatted': '(215) 336-1365',
            'phone': '2153361365',
            'address': "<a href='https://www.google.com'>3264 Larimer St</a>",
            'city': 'Denver',
            'country': 'United States',
            'postalCode': '80205',
            'state': 'Colorado',
            'size':'10-15',
            
          }
        },
        {
          'type': 'Feature',
          'geometry': {
            'type': 'Point',
            'coordinates': [-87.629277,41.882986]
          },
          'properties': {
            'phoneFormatted': '(224) 547-9338',
            'phone': '2245479338',
            'address': "<a href='https://www.google.com'>108 N State St</a>",
            'city': 'Chicago',
            'country': 'United States',
            'postalCode': '60602',
            'state': 'Illinois',
            'size':'5-10'
          }
        },
        {
          'type': 'Feature',
          'geometry': {
            'type': 'Point',
            'coordinates': [-122.314596,47.666588]
          },
          'properties': {
            'phoneFormatted': '(610) 442-9400',
            'phone': '6104429400',
            'address': "<a href='https://www.google.com'>5201 Brooklyn Ave</a>",
            'city': 'Seattle',
            'country': 'United States',
            'postalCode': '98105',
            'state': 'Washington',
            'size':'10-15',
          }
        },
        {
          'type': 'Feature',
          'geometry': {
            'type': 'Point',
            'coordinates': [-77.359425054188, 38.958058116661]
          },
          'properties': {
            'phoneFormatted': '(571) 203-0082',
            'phone': '5712030082',
            'address': "<a href='https://www.google.com'>11935 Democracy Dr</a>",
            'city': 'Reston',
            'country': 'United States',
            'crossStreet': 'btw Explorer & Library',
            'postalCode': '20190',
            'state': 'Virginia',
            'size':'5-10'
          }
        },
      ]
    };


    // <<<<<<<<----------------  SIDEBAR POPULATION SECTION ---------------- >>>>>>>>>>

    /**
     * Assign a unique id to each unique_squadd. You'll use this `id`
     * later to associate each point on the map with a listing
     * in the sidebar.
     */
     squadd_instances.features.forEach((unique_squadd, i) => {
      unique_squadd.properties.id = i;
    });

    /**
     * Wait until the map loads to make changes to the map.
     */
    map.on('load', () => {
      /**
       * This is where your '.addLayer()' used to be, instead
       * add only the source without styling a layer
       */
      map.addSource('places', {
        'type': 'geojson',
        'data': squadd_instances
      });
      
// Group squadd_instances by state
function groupSquaddsByState(squadd_instances) {
var groupedSquadds = {};

squadd_instances.features.forEach((unique_squadd) => {
  var state = unique_squadd.properties.state;
  if (!groupedSquadds[state]) {
    groupedSquadds[state] = [];
  }
  groupedSquadds[state].push(unique_squadd);
});

return groupedSquadds;
}




// Populate the state categories in the sidebar
function populateStateCategories(groupedSquadds) {
var statesList = document.getElementById('states-list');

for (var state in groupedSquadds) {
  const stateCategory = groupedSquadds[state];
  const stateHeader = document.createElement('h2');
  stateHeader.textContent = state;
  statesList.appendChild(stateHeader);

  stateCategory.forEach((unique_squadd) => {
    const listing = statesList.appendChild(document.createElement('div'));
    listing.className = 'item';
    const link = listing.appendChild(document.createElement('a'));
    link.href = squadd_instances.event_link;
    link.className = 'title';
    link.innerHTML = `${unique_squadd.properties.address}`;

    const details = listing.appendChild(document.createElement('div'));
    details.innerHTML = `${unique_squadd.properties.city}`;
    if (unique_squadd.properties.phone) {
      details.innerHTML += ` &middot; ${unique_squadd.properties.phoneFormatted}`;
    }
  });
}
}

// Call the functions to group squadd_instances and populate the state categories
var groupedSquadds = groupSquaddsByState(squadd_instances);
populateStateCategories(groupedSquadds);

      // <<<<<<<<<<<<<<<<< ----------------  MAP POPULATION SECTION ---------------- >>>>>>>>>>>>>>>>>..
      /**
       * Create a new MapboxGeocoder instance.
       */
      const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: true,
        bbox: [-125.000000, 24.396308, -66.934570, 49.384358],
        placeholder: 'Search for a SquaDD near you'

      });

      /**
       * Add all the things to the page:
       * - The location listings on the side of the page
       * - The search box (MapboxGeocoder) onto the map
       * - The markers onto the map
       */
      buildLocationList(squadd_instances);
      map.addControl(geocoder, 'top-right');
      addMarkers();

      /**
       * Listen for when a geocoder result is returned. When one is returned:
       * - Calculate distances
       * - Sort squadd_instances by distance
       * - Rebuild the listings
       * - Adjust the map camera
       * - Open a popup for the closest unique_squadd
       * - Highlight the listing for the closest unique_squadd.
       */
      geocoder.on('result', (event) => {
        /* Get the coordinate of the search result */
        const searchResult = event.result.geometry;
        

        /**
         * Calculate distances:
         * For each unique_squadd, use turf.distance to calculate the distance
         * in miles between the searchResult and the unique_squadd. Assign the
         * calculated value to a property called `distance`.
         */
        const options = { units: 'miles' };
        for (const unique_squadd of squadd_instances.features) {
          unique_squadd.properties.distance = turf.distance(
            searchResult,
            unique_squadd.geometry,
            options
          );
        }

        /**
         * Sort squadd_instances by distance from closest to the `searchResult`
         * to furthest.
         */
         squadd_instances.features.sort((a, b) => {
          if (a.properties.distance > b.properties.distance) {
            return 1;
          }
          if (a.properties.distance < b.properties.distance) {
            return -1;
          }
          return 0; // a must be equal to b
        });

        /**
         * Rebuild the listings:
         * Remove the existing listings and build the location
         * list again using the newly sorted squadd_instances.
         */
        const listings = document.getElementById('listings');
        while (listings.firstChild) {
          listings.removeChild(listings.firstChild);
        }
        buildLocationList(squadd_instances);

        /* Open a popup for the closest unique_squadd. */
        createPopUp(squadd_instances.features[0]);

        /** Highlight the listing for the closest unique_squadd. */
        const activeListing = document.getElementById(
          `listing-${squadd_instances.features[0].properties.id}`
        );
        activeListing.classList.add('active');

        /**
         * Adjust the map camera:
         * Get a bbox that contains both the geocoder result and
         * the closest squadd. Fit the bounds to that bbox.
         */
        const bbox = getBbox(squadd_instances, 0, searchResult);
        map.fitBounds(bbox, {
          padding: 100
        });
      });
    });

    /**
     * Using the coordinates (lng, lat) for
     * (1) the search result and
     * (2) the closest squadd
     * construct a bbox that will contain both points
     */
    function getBbox(sortedSquadds, squaddIdentifier, searchResult) {
      const lats = [
      sortedSquadds.features[squaddIdentifier].geometry.coordinates[1],
        searchResult.coordinates[1]
      ];
      const lons = [
      sortedSquadds.features[squaddIdentifier].geometry.coordinates[0],
        searchResult.coordinates[0]
      ];
      const sortedLons = lons.sort((a, b) => {
        if (a > b) {
          return 1;
        }
        if (a.distance < b.distance) {
          return -1;
        }
        return 0;
      });
      const sortedLats = lats.sort((a, b) => {
        if (a > b) {
          return 1;
        }
        if (a.distance < b.distance) {
          return -1;
        }
        return 0;
      });
      return [
        [sortedLons[0], sortedLats[0]],
        [sortedLons[1], sortedLats[1]]
      ];
    }

    /**
     * Add a marker to the map for every unique_squadd listing.
     **/
    function addMarkers() {
      /* For each feature in the GeoJSON object above: */
      for (const marker of squadd_instances.features) {
        /* Create a div element for the marker. */
        const el = document.createElement('div');
        /* Assign a unique `id` to the marker. */
        el.id = `marker-${marker.properties.id}`;
        /* Assign the `marker` class to each marker for styling. */
        el.className = 'marker';

        /**
         * Create a marker using the div element
         * defined above and add it to the map.
         **/
        new mapboxgl.Marker(el, { offset: [0, -23] })
          .setLngLat(marker.geometry.coordinates)
          .addTo(map);

        /**
         * Listen to the element and when it is clicked, do three things:
         * 1. Fly to the point
         * 2. Close all other popups and display popup for clicked unique_squadd
         * 3. Highlight listing in sidebar (and remove highlight for all other listings)
         **/
        el.addEventListener('click', (e) => {
          flyToSquadd(marker);
          createPopUp(marker);
          const activeItem = document.getElementsByClassName('active');
          e.stopPropagation();
          if (activeItem[0]) {
            activeItem[0].classList.remove('active');
          }
          const listing = document.getElementById(
            `listing-${marker.properties.id}`
          );
          listing.classList.add('active');
        });
      }
    }

    /**
     * Add a listing for each squadd to the sidebar.
     **/
    
  function buildLocationList(squadd_instances) {  
    for (const unique_squadd of squadd_instances.features) {
  /* Add a new listing section to the sidebar. */
    const listings = document.getElementById('listings'); // Updated here
    const listing = listings.appendChild(document.createElement('div'));
  /* Assign a unique `id` to the listing. */
    listing.id = `listing-${unique_squadd.properties.id}`;
  /* Assign the `item` class to each listing for styling. */
    listing.className = 'item';
        
        /* Add the link to the individual listing created above. */
        const link = listing.appendChild(document.createElement('a'));
        link.href = squadd_instances.event_link;
        link.className = 'title';
        link.id = `link-${unique_squadd.properties.id}`;
        link.innerHTML = `${unique_squadd.properties.address}`;
        

        /* Add details to the individual listing. */
        const details = listing.appendChild(document.createElement('div'));
        details.innerHTML = `${unique_squadd.properties.city}`;
        if (unique_squadd.properties.phone) {
          details.innerHTML += ` &middot; ${unique_squadd.properties.phoneFormatted}`;
        }
        if (unique_squadd.properties.distance) {
          const roundedDistance =
            Math.round(unique_squadd.properties.distance * 100) / 100;
          details.innerHTML += `<div><strong>${roundedDistance} miles away</strong></div>`;
        }

        /**
         * Listen to the element and when it is clicked, do four things:
         * 1. Update the `currentFeature` to the unique_squadd associated with the clicked link
         * 2. Fly to the point
         * 3. Close all other popups and display popup for clicked unique_squadd
         * 4. Highlight listing in sidebar (and remove highlight for all other listings)
         **/
        link.addEventListener('click', function () {
          for (const feature of squadd_instances.features) {
            if (this.id === `link-${feature.properties.id}`) {
              flyToSquadd(feature);
              createPopUp(feature);
            }
          }
          const activeItem = document.getElementsByClassName('active');
          if (activeItem[0]) {
            activeItem[0].classList.remove('active');
          }
          this.parentNode.classList.add('active');
        });
      }
    }

    /**
     * Use Mapbox GL JS's `flyTo` to move the camera smoothly
     * a given center point.
     **/
    function flyToSquadd(currentFeature) {
      map.flyTo({
        center: currentFeature.geometry.coordinates,
        zoom: 15
      });
    }

    /**
     * Create a Mapbox GL JS `Popup`.
     **/
    function createPopUp(currentFeature) {
      const popUps = document.getElementsByClassName('mapboxgl-popup');
      if (popUps[0]) popUps[0].remove();

      const popup = new mapboxgl.Popup({ closeOnClick: false })
        .setLngLat(currentFeature.geometry.coordinates)
        .setHTML(
          `<h3>Sample SquaDD Name </h3> 
          <h4> <b>Contact: </b> ${currentFeature.properties.phoneFormatted}</h4>
          <h4> <b>Size:</b> ${currentFeature.properties.size} members</h4>
          <h4><a href="https://forms.gle/35EBvXxfDUnTY1z9A" target="_blank"> Join this SquaDD </a></h4>`
        )
        
        .addTo(map);
    }
 /**
     * Will need to add a layer to feature Events as POI 
     **/
 /**
     * Will also need to adapt the current POI to highlighted areas
     **/

     /**
     * Will also need to have sidebar drop down for each state?
     **/
 </script>

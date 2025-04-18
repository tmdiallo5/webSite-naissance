const DEMANDES = [
  {
    "id": "demand-1",
    "description": "Demande de confirmation de naissance pour Landry Spencer",
    "status": "IN PROGRESS",
    "requestedDate": "2023-10-01T10:00:00 -02:00",
    "child": {
      "gender": "male",
      "firstName": "Landry",
      "lastName": "Spencer",
      "birthDate": "2014-04-14T05:32:34 -02:00"
    },
    "parents": [
      {
        "relation": "firstParent",
        "gender": "male",
        "firstName": "Magdalena",
        "lastName": "Carver",
        "email": "magdalenacarver@mixers.com",
        "phone": "+1 (847) 486-3744",
        "address": "327 Moffat Street, Tuttle, Montana, 7001"
      },
      {
        "relation": "secondParent",
        "gender": "female",
        "firstName": "Wilson",
        "lastName": "Rocha",
        "email": "wilsonrocha@mixers.com",
        "phone": "+1 (834) 431-3901",
        "address": "905 Monitor Street, Saranap, North Carolina, 5660"
      }
    ],
    "organization": {
      "name": "TERRASYS",
      "address": "387 Ingraham Street, Courtland, Palau, 9666"
    },
    "comment": "La demande est en cours de traitement pour validation des informations de naissance."
  },
  {
    "id": "demand-2",
    "description": "Demande de certification de naissance pour Bass Walter",
    "status": "COMPLETED",
    "requestedDate": "2023-05-15T09:30:00 -02:00",
    "child": {
      "gender": "male",
      "firstName": "Bass",
      "lastName": "Walter",
      "birthDate": "2017-12-23T10:07:44 -01:00"
    },
    "parents": [
      {
        "relation": "firstParent",
        "gender": "male",
        "firstName": "Underwood",
        "lastName": "Howell",
        "email": "underwoodhowell@terrasys.com",
        "phone": "+1 (992) 480-3263",
        "address": "874 Rockaway Avenue, Jamestown, Pennsylvania, 5692"
      },
      {
        "relation": "secondParent",
        "gender": "male",
        "firstName": "Sharron",
        "lastName": "Cleveland",
        "email": "sharroncleveland@terrasys.com",
        "phone": "+1 (885) 598-3970",
        "address": "593 Oriental Boulevard, Cleary, New Jersey, 5506"
      }
    ],
    "organization": {
      "name": "NSPIRE",
      "address": "886 Suydam Street, Roeville, Missouri, 8272"
    },
    "comment": "Demande complétée et certifiée."
  },
  {
    "id": "demand-3",
    "description": "Demande de confirmation de naissance pour Talia Morris",
    "status": "PENDING",
    "requestedDate": "2023-07-10T08:15:00 -02:00",
    "child": {
      "gender": "female",
      "firstName": "Talia",
      "lastName": "Morris",
      "birthDate": "2016-03-22T06:24:22 -02:00"
    },
    "parents": [
      {
        "relation": "firstParent",
        "gender": "female",
        "firstName": "Alyson",
        "lastName": "Morris",
        "email": "alysonmorris@familysys.com",
        "phone": "+1 (921) 555-1122",
        "address": "456 Stone Street, Monticello, Wyoming, 6684"
      },
      {
        "relation": "secondParent",
        "gender": "male",
        "firstName": "Erick",
        "lastName": "Morris",
        "email": "erickmorris@familysys.com",
        "phone": "+1 (822) 555-3398",
        "address": "789 Birch Avenue, Sunnyvale, Texas, 7789"
      }
    ],
    "organization": {
      "name": "FAMILYSYS",
      "address": "890 Ash Street, Haverhill, Georgia, 3033"
    },
    "comment": "En attente de vérification des informations de naissance."
  },
  {
    "id": "demand-4",
    "description": "Demande de certification de naissance pour Lewis Blair",
    "status": "IN PROGRESS",
    "requestedDate": "2023-11-03T11:30:00 -02:00",
    "child": {
      "gender": "male",
      "firstName": "Lewis",
      "lastName": "Blair",
      "birthDate": "2018-06-14T14:32:34 -02:00"
    },
    "parents": [
      {
        "relation": "firstParent",
        "gender": "female",
        "firstName": "Diane",
        "lastName": "Blair",
        "email": "dianeblair@familysys.com",
        "phone": "+1 (123) 456-7890",
        "address": "101 Maple Avenue, Springfield, Illinois, 62704"
      },
      {
        "relation": "secondParent",
        "gender": "male",
        "firstName": "Charles",
        "lastName": "Blair",
        "email": "charlesblair@familysys.com",
        "phone": "+1 (098) 765-4321",
        "address": "101 Maple Avenue, Springfield, Illinois, 62704"
      }
    ],
    "organization": {
      "name": "FAMILYSYS",
      "address": "102 Main Street, Haverhill, Georgia, 3033"
    },
    "comment": "En cours de traitement."
  },
  // Ajouter ici jusqu'à atteindre le total de 23 enfants avec des informations similaires pour chaque entrée
];

export { DEMANDES };

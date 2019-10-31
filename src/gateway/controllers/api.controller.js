const { controller } = require('jimpex');
const axios = require('axios');

class ApiController {
  constructor(app) {
    /**
     * The local reference to the App.
     * @type {App}
     */
    this.app = app;

    this.authenticateUser = this.authenticateUser.bind(this);
    this.createUser = this.createUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.getPerson = this.getPerson.bind(this);
    this.getSelectData = this.getSelectData.bind(this);
    this.dataComplete = this.dataComplete.bind(this);
    this.getEvents = this.getEvents.bind(this);
    this.getPublications = this.getPublications.bind(this);
    this.uploadPost = this.uploadPost.bind(this);
    this.getInscriptions = this.getInscriptions.bind(this);
    this.getPersonEvents = this.getPersonEvents.bind(this);
    this.getEventInscripted = this.getEventInscripted.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.getEvent = this.getEvent.bind(this);
    this.getCategories = this.getCategories.bind(this);
    this.getEventCategories = this.getEventCategories.bind(this);
    this.getFaq = this.getFaq.bind(this);
    this.uploadQuestion = this.uploadQuestion.bind(this);
    this.getPublicationsByUser = this.getPublicationsByUser.bind(this);
    this.getPublicationsNoAdmin = this.getPublicationsNoAdmin.bind(this);
  }

  /**
   * Makes a POST request to the backed
   * body has password and username
   *
   * @param   {Object}  req
   * @param   {Object}  res
   *
   * @return  {Promise}
   */
  createUser(req, res) {
    axios.post(
      'http://localhost:4000/api/users/create',
      {
        username: req.body.username,
        password: req.body.password,
      }
    )
      .then((data) => {
        res.status(200).send(data.data);
      })
      .catch((error) => {
        res.status(500).send(error.message);
      });
  }

  /**
   * Makes a POST request to the backed
   * body has password and username
   *
   * @param   {Object}  req
   * @param   {Object}  res
   *
   * @return  {Promise}
   */
  authenticateUser(req, res) {
    axios.post(
      'http://localhost:4000/api/users/authenticate',
      {
        username: req.body.username,
        password: req.body.password,
      }
    )
      .then((data) => {
        res.status(200).send(data.data);
      })
      .catch((error) => {
        res.status(500).send(error.message);
      });
  }


  getPerson(req, res) {
    axios.post(
      'http://localhost:4000/api/users/person',
      {
        data: req.body,
      }
    )
      .then((data) => {
        res.status(200).send(data.data);
      })
      .catch((error) => {
        res.status(500).json(error.message);
      });    
  }

  updateUser(req, res) {
    axios.post(
      'http://localhost:4000/api/users/update',
      {
        data: req.body,
      }
    )
      .then((data) => {
        res.status(200).send(data.data);
      })
      .catch((error) => {
        res.status(500).json(error.message);
      });
  }

  getSelectData(req, res) {
    axios.get(
      'http://localhost:4000/api/users/dataSelect',
      {},
    )
      .then((data) => {
        res.status(200).send(data.data);
      })
      .catch((error) => {
        res.status(500).json(error.message);
      });
  }

  dataComplete(req, res) {
    axios.post(
      'http://localhost:4000/api/users/userData',
      {
        data: req.body,
      }
    )
      .then((data) => {
        res.status(200).send(data.data);
      })
      .catch((error) => {
        res.status(500).json(error.message);
      });
  }

  getEvents(req, res) {
    axios.post(
      'http://localhost:4000/api/users/getEvents',
      {
        data: req.body,
      }
    )
      .then((data) => {
        res.status(200).send(data.data);
      })
      .catch((error) => {
        res.status(500).json(error.message);
      });
  }

  getPublications(req, res) {
    axios.post(
      'http://localhost:4000/api/users/getPublications',
      {
        data: req.body,
      }
    )
      .then((data) => {
        res.status(200).send(data.data);
      })
      .catch((error) => {
        res.status(500).json(error.message);
      });
  }

  uploadPost(req, res) {
    axios.post(
      'http://localhost:4000/api/users/uploadPost',
      {
        data: req.body,
      }
    )
      .then((data) => {
        res.status(200).send(data.data);
      })
      .catch((error) => {
        res.status(500).json(error.message);
      });
  }

  getInscriptions(req, res) {
    axios.post(
      'http://localhost:4000/api/users/getInscriptions',
      {
        data: req.body,
      }
    )
      .then((data) => {
        res.status(200).send(data.data);
      })
      .catch((error) => {
        res.status(500).json(error.message);
      });
  }

  getPersonEvents(req, res) {
    axios.post(
      'http://localhost:4000/api/users/getPersonEvents',
      {
        data: req.body,
      }
    )
      .then((data) => {
        res.status(200).send(data.data);
      })
      .catch((error) => {
        res.status(500).json(error.message);
      });
  }

  getEventInscripted(req, res) {
    axios.post(
      'http://localhost:4000/api/users/getEventInscripted',
      {
        data: req.body,
      }
    )
      .then((data) => {
        res.status(200).send(data.data);
      })
      .catch((error) => {
        res.status(500).json(error.message);
      });
  }

  deletePost(req, res) {
    axios.post(
      'http://localhost:4000/api/users/deletePost',
      {
        data: req.body,
      }
    )
      .then((data) => {
        res.status(200).send(data.data);
      })
      .catch((error) => {
        res.status(500).json(error.message);
      });
  }

  getSelectDataNewEvent(req, res) {
    axios.get(
      'http://localhost:4000/api/users/getSelectDataNewEvent',
      {},
    )
      .then((data) => {
        res.status(200).send(data.data);
      })
      .catch((error) => {
        res.status(500).json(error.message);
      });
  }

  createEvent(req, res) {
    axios.post(
      'http://localhost:4000/api/users/createEvent',
      {
        data: req.body,
      }
    )
      .then((data) => {
        res.status(200).send(data.data);
      })
      .catch((error) => {
        res.status(500).json(error.message);
      });
  }

  getEvent(req, res) {
    axios.post(
      'http://localhost:4000/api/users/getEvent',
      {
        data: req.body,
      }
    )
      .then((data) => {
        res.status(200).send(data.data);
      })
      .catch((error) => {
        res.status(500).json(error.message);
      });
  }

  getCategories(req, res) {
    axios.post(
      'http://localhost:4000/api/users/getCategories',
      {
        data: req.body,
      }
    )
      .then((data) => {
        res.status(200).send(data.data);
      })
      .catch((error) => {
        res.status(500).json(error.message);
      });
  }

  getEventCategories(req, res) {
    axios.post(
      'http://localhost:4000/api/users/getEventCategories',
      {
        data: req.body,
      }
    )
      .then((data) => {
        res.status(200).send(data.data);
      })
      .catch((error) => {
        res.status(500).json(error.message);
      });
  }


  getFaq(req, res) {
    axios.post(
      'http://localhost:4000/api/users/getFaq',
      {
        data: req.body,
      }
    )
      .then((data) => {
        res.status(200).send(data.data);
      })
      .catch((error) => {
        res.status(500).json(error.message);
      });
  }

  uploadQuestion(req, res) {
    axios.post(
      'http://localhost:4000/api/users/uploadQuestion',
      {
        data: req.body,
      }
    )
      .then((data) => {
        res.status(200).send(data.data);
      })
      .catch((error) => {
        res.status(500).json(error.message);
      });
  }

  getPublicationsByUser(req, res) {
    axios.post(
      'http://localhost:4000/api/users/getPublicationsByUser',
      {
        data: req.body,
      }
    )
      .then((data) => {
        res.status(200).send(data.data);
      })
      .catch((error) => {
        res.status(500).json(error.message);
      });
  }

  getPublicationsNoAdmin(req, res) {
    axios.post(
      'http://localhost:4000/api/users/getPublicationsNoAdmin',
      {
        data: req.body,
      }
    )
      .then((data) => {
        res.status(200).send(data.data);
      })
      .catch((error) => {
        res.status(500).json(error.message);
      });
  }

  getPublicationsAdmin(req, res) {
    axios.post(
      'http://localhost:4000/api/users/getPublicationsAdmin',
      {
        data: req.body,
      }
    )
      .then((data) => {
        res.status(200).send(data.data);
      })
      .catch((error) => {
        res.status(500).json(error.message);
      });
  }
}

const apiController = controller((app) => {
  const router = app.get('router');
  const ctrl = new ApiController(app);
  return [
    router.post('/users/authenticate', ctrl.authenticateUser),
    router.post('/users/create', ctrl.createUser),
    router.post('/users/person', ctrl.getPerson),
    router.post('/users/update', ctrl.updateUser),
    router.post('/users/dataSelect', ctrl.getSelectData),
    router.post('/users/userData', ctrl.dataComplete),
    router.post('/users/getEvents', ctrl.getEvents),
    router.post('/users/getPublications', ctrl.getPublications),
    router.post('/users/uploadPost', ctrl.uploadPost),
    router.post('/users/getInscriptions', ctrl.getInscriptions),
    router.post('/users/getPersonEvents', ctrl.getPersonEvents),
    router.post('/users/getEventInscripted', ctrl.getEventInscripted),
    router.post('/users/deletePost', ctrl.deletePost),
    router.post('/users/getSelectDataNewEvent', ctrl.getSelectDataNewEvent),
    router.post('/users/createEvent', ctrl.createEvent),
    router.post('/users/getEvent', ctrl.getEvent),
    router.post('/users/getCategories', ctrl.getCategories),
    router.post('/users/getEventCategories', ctrl.getEventCategories),
    router.post('/users/getFaq', ctrl.getFaq),
    router.post('/users/uploadQuestion', ctrl.uploadQuestion),
    router.post('/users/getPublicationsByUser', ctrl.getPublicationsByUser),
    router.post('/users/getPublicationsNoAdmin', ctrl.getPublicationsNoAdmin),
    router.post('/users/getPublicationsAdmin', ctrl.getPublicationsAdmin),
  ];
});

module.exports = {
  ApiController,
  apiController,
};

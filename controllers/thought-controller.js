
const { Thought, User } = require('../models');

const thoughtController = {
    //get all thoughts
    getAllThought(req, res) {
        Thought.find({})
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    //post thought
    postThought({ body }, res) {
        Thought.create(body)
        .then(dbThoughtData => {
            return User.findOneAndUpdate(
                {username: dbThoughtData.username},
                {$push: {thoughts: dbThoughtData._id}},
                {new: true}
            );
        })
          .then(dbUserData => {
              if (!dbUserData) {
                  res.status(404).json({message: 'No user found with this id!' });
                  return;
              }
              res.json(dbUserData);
          })
          .catch(err => res.json(err));        
    },

    //getById
    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.id })
          .then(dbThoughtData => {
            // If no thought is found, send 404
            if (!dbThoughtData) {
              res.status(404).json({ message: 'No thought found with this id!' });
              return;
            }
            res.json(dbThoughtData);
          })
          .catch(err => {
            console.log(err);
            res.status(400).json(err);
          });
    },

    //put
    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.id }, body, { new: true })
        .then(dbThoughtData => { 
            if(!dbThoughtData) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.status(400).json(err));
    },

    //del by id
    deleteThought({ params, body }, res) {
        Thought.findOneAndDelete({ _id: params.id })
          .then(deletedThought => {
            if (!deletedThought) {
              res.status(404).json({ message: 'No thought with this id!' });
              return;
            }
            res.json(deletedThought);
        })
        .catch(err => res.status(400).json(err));
    }

};

module.exports = thoughtController;
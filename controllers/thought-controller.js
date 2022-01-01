
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
        console.log(body);
        Thought.create(body)
          .then(({ _id, body }) => {
            return User.findOneAndUpdate(
                //looks for user with '_id' that matches params.userId
                { _id: body.username },
                //pushes new Thoughts '_id' to the Users thought arr
                { $push: { thoughts: _id }},
                { new: true }
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


    //put

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


    //         return User.findOneAndUpdate(
    //           { _id: body.username },
    //           { $pull: { thoughts: params.id } },
    //           { new: true }
    //         );
    //       })
    //       .then(dbUserData => {
    //         if (!dbUserData) {
    //           res.status(404).json({ message: 'No user found with this id!' });
    //           return;
    //         }
    //         res.json(dbUserData);
    //       })
    //       .catch(err => res.json(err));
    // }

module.exports = thoughtController;
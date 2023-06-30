module.exports = {


  friendlyName: 'Logout',


  description: 'Log out of this app.',


  extendedDescription:
`This action deletes the \`req.session.userId\` key from the session of the requesting user agent.`,


  exits: {

    success: {
      description: 'The requesting user agent has been successfully logged out.'
    },

    redirect: {
      description: 'The requesting user agent looks to be a web browser.',
      extendedDescription: 'After logging out from a web browser, the user is redirected away.',
      responseType: 'redirect'
    }

  },


  fn: async function () {

    // Clear the `userId` property from this session.
    delete this.req.session.userId;

    // Then finish up, sending an appropriate response.
    // > Under the covers, this persists the now-logged-out session back
    // > to the underlying session store.
    if (!this.req.wantsJSON) {
      throw {redirect: '/login'};
    }

  }


};

const buildAndSendMessage = async (card, actorUser, send) => {
  await send(`*${card.name}* was deleted by ${actorUser.name}`);
};

module.exports = {
  inputs: {
    record: {
      type: 'ref',
      required: true,
    },
    project: {
      type: 'ref',
      required: true,
    },
    board: {
      type: 'ref',
      required: true,
    },
    list: {
      type: 'ref',
      required: true,
    },
    actorUser: {
      type: 'ref',
      required: true,
    },
    request: {
      type: 'ref',
    },
  },

  async fn(inputs) {
    const card = await Card.archiveOne(inputs.record.id);

    if (card) {
      sails.sockets.broadcast(
        `board:${card.boardId}`,
        'cardDelete',
        {
          item: card,
        },
        inputs.request,
      );

      sails.helpers.utils.sendWebhooks.with({
        event: 'cardDelete',
        data: {
          item: card,
          included: {
            projects: [inputs.project],
            boards: [inputs.board],
            lists: [inputs.list],
          },
        },
        user: inputs.actorUser,
      });

      if (sails.config.custom.slackBotToken) {
        buildAndSendMessage(card, inputs.actorUser, sails.helpers.utils.sendSlackMessage);
      }

      if (sails.config.custom.googleChatWebhookUrl) {
        buildAndSendMessage(card, inputs.actorUser, sails.helpers.utils.sendGoogleChatMessage);
      }
    }

    return card;
  },
};

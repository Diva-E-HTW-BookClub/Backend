/** source/routes/posts.ts */
import express from 'express';
import bookClubController from '../controllers/bookClubControllers';
import discussionController from '../controllers/discussionControllers';
import commentController from '../controllers/commentControllers';
import resourceController from '../controllers/resourceControllers';
const routes = express.Router();

// Expects filter, inputText, memberId, includeMember, resultsLimit and lastBookClubId in params
routes.get('/bookClub/search', bookClubController.searchBookClubs)

//Expects bookClubId in params and data in body
routes.get('/bookClub', bookClubController.getBookClub);
routes.post('/bookClub', bookClubController.createBookClub);
routes.patch('/bookClub', bookClubController.updateBookClub);
routes.delete('/bookClub', bookClubController.deleteBookClub);

//Expects bookClubId and memberId in params
routes.post('/bookClub/addMember', bookClubController.addClubMember)
routes.post('/bookClub/removeMember', bookClubController.removeClubMember)

//Expects bookClubId and resourceId in params and data in body
routes.get('/bookClub/resource', resourceController.getResource);
routes.post('/bookClub/resource', resourceController.createResource);
routes.patch('/bookClub/resource', resourceController.updateResource);
routes.delete('/bookClub/resource', resourceController.deleteResource);

//Expects bookClubId and discussionId in params and data in body
routes.get('/bookClub/discussion', discussionController.getDiscussion);
routes.post('/bookClub/discussion', discussionController.createDiscussion);
routes.patch('/bookClub/discussion', discussionController.updateDiscussion);
routes.delete('/bookClub/discussion', discussionController.deleteDiscussion);

//Expects bookClubId, discussionId and participantId in params
routes.post('/bookClub/discussion/addParticipant', discussionController.addParticipant);
routes.post('/bookClub/discussion/removeParticipant', discussionController.removeParticipant);

//Expects bookClubId, discussionId in params and data in body
routes.get('/bookClub/discussion/agenda', discussionController.getAgenda);
routes.post('/bookClub/discussion/agenda', discussionController.createAgenda);
routes.patch('/bookClub/discussion/agenda', discussionController.updateAgenda);
routes.delete('/bookClub/discussion/agenda', discussionController.deleteAgenda);

//Expects bookClubId, discussionId and commentId in params
routes.get('/bookClub/discussion/allComments', discussionController.getAllComments)

//Expects bookClubId, discussionId and commentId in params and data in body
routes.get('/bookClub/discussion/comment', commentController.getComment);
routes.post('/bookClub/discussion/comment', commentController.createComment);
routes.patch('/bookClub/discussion/comment', commentController.updateComment);
routes.delete('/bookClub/discussion/comment', commentController.deleteComment);

//socket.io
routes.get('/join', (req, res, next) => {
    return res.status(200).json({
        data : "This is the Join page!"
    });
})

routes.get('')
// routes.delete('/posts/:id', controller.deletePost);
// routes.post('/posts', controller.addPost);

export { routes };
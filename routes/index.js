var express = require(`express`)
var router = express.Router()

const apiCtrl = require(`../controllers`)
const apiCtrlDepartments = require(`../controllers/departments`)
const apiCtrlPosts = require(`../controllers/posts`)
const apiCtrlNames = require(`../controllers/names`)
const apiCtrlIpaddresses = require(`../controllers/ipaddresses`)

/**
 * @swagger
 * definition:
 *   posts:
 *     properties:
 *       id:
 *         type: number
 *       title:
 *         type: string
 *       author:
 *         type: integer
 *
 *   departments:
 *     properties:
 *       code:
 *         type: string
 *       name:
 *         type: integer
 *
 *   ipaddresses:
 *     properties:
 *       ip:
 *         type: string
 *       x:
 *         type: number
 *       y:
 *         type: number
 *
 *   names:
 *     properties:
 *       name:
 *         type: integer
 */
/**
 * @swagger
 * /api/posts:
 *   get:
 *     tags:
 *       - posts
 *     description: Returns all posts
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of posts
 *         schema:
 *           $ref: '#/definitions/posts'
 *   post:
 *     tags:
 *       - posts
 *     description: Creates a new post
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: tarun
 *         description: post object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/posts'
 *     responses:
 *       200:
 *         description: Successfully created
 *
 * /api/departments:
 *   get:
 *     tags:
 *       - departments
 *     description: Returns all departments
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of departments
 *         schema:
 *           $ref: '#/definitions/departments'
 * /api/names:
 *   get:
 *     tags:
 *       - names
 *     description: Returns all names
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of names
 *         schema:
 *           $ref: '#/definitions/names'
 *   post:
 *     tags:
 *       - names
 *     description: Creates a new name
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: tarun
 *         description: post object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/names'
 *     responses:
 *       200:
 *         description: Successfully created
 * /api/ipaddresses:
 *   get:
 *     tags:
 *       - ipaddresses
 *     description: Returns all ipaddresses
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of ipaddresses
 *         schema:
 *           $ref: '#/definitions/ipaddresses'
 */
// define the about route
router
  .route(`/posts`)
  .get(apiCtrlPosts.getPosts)
  .post(apiCtrlPosts.postPosts)
router.route(`/departments`).get(apiCtrlDepartments.getDepartments)

router
  .route(`/names`)
  .get(apiCtrlNames.getNames)
  .post(apiCtrlNames.postNames)

router.route(`/ipaddresses`).get(apiCtrlIpaddresses.getIpaddresses)

module.exports = router

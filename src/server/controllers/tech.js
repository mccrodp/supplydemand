import type { $Request, $Response } from 'express'
import type { APIError as APIErrorType } from '../constants/types'

const api = {
  tech: require('../api/tech'),
  error: require('../api/error')
}

/**
 * Handle API error
 *
 * @param {Object} res  The HTTP response object.
 * @param {Error}  err  The HTTP error.
 */
const handleApiError = (res: $Response, err: Error) => {
  if (!err.statusCode) {
    err.statusCode = 500
  }

  res.status(err.statusCode).send(err)
  console.error(err)
}

/**
 * Get all tech
 * # Response
 *    Object with tech
 */
exports.getAllTech = function (req: $Request, res: $Response) {
  api.tech.getAllTech()
    .then(tech => res.send(tech))
    .catch((err: APIErrorType) => handleApiError(res, err))
}

/**
 * Get tech
 * # Response
 *    Object with tech
 */
exports.getTech = function (req: $Request, res: $Response) {
  console.log(req.params.tech)
  api.tech.getTech(req.params.tech)
    .then(tech => res.send(tech))
    .catch((err: APIErrorType) => handleApiError(res, err))
}

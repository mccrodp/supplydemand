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
function getAllTech (req: $Request, res: $Response) {
  api.tech.getAllTech()
    .then(tech => res.send(tech))
    .catch((err: APIErrorType) => handleApiError(res, err))
}

/**
 * Get specific tech
 * # Response
 *    Object with tech
 */
function getTech (req: $Request, res: $Response) {
  api.tech.getTech(req.params.tech)
    .then(tech => res.send(tech))
    .catch((err: APIErrorType) => handleApiError(res, err))
}

/**
 * Fn exports.
 */
module.exports = {
  getAllTech,
  getTech
}

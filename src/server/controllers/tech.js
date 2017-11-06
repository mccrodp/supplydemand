import type { $Request, $Response } from 'express'

const formidable = require('formidable')
const path = require('path')
const fs = require('fs')
const api = {
  applicants: require('../api/applicants'),
  error: require('../api/error')
}
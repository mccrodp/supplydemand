import { TechModel } from '.'
import type {
  TechItem
} from '../../constants/types'

function getAllTech () : Promise<TechItem> {
  return TechModel.fetchAll().then(tech => tech.toJSON())
}

function getTech (name) : Promise<TechItem> {
  return TechModel.where('machine_name', name)
}

module.exports = {
  getAllTech,
  getTech
}

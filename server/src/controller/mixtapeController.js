import * as model from '../model/mixtapeModel.js';

export const getAll = async (req, res) => {
  const data = await model.getAllMixtapes();
  res.json(data);
};

export const getById = async (req, res) => {
  const data = await model.getMixtapeById(req.params.id);
  res.json(data);
};

export const create = async (req, res) => {
  const id = await model.createMixtape(req.body);
  console.log('BODY:', req.body);
  res.json({ id });
};

export const update = async (req, res) => {
  await model.updateMixtape(req.params.id, req.body);
  res.json({ success: true });
};

export const remove = async (req, res) => {
  await model.deleteMixtape(req.params.id);
  res.json({ success: true });
};

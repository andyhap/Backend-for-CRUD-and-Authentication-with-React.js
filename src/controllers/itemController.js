import Item from '../models/Item.js';

// GET ITEMS
export const getItems = async (req, res) => {
try {
    const items = await Item.findAll({ where: { userId: req.user.id } });
    res.json(items);
} catch (err) {
    res.status(500).json({ message: 'Gagal mengambil data', error: err.message });
}
};

// CREATE ITEM
export const createItem = async (req, res) => {
try {
    const { title, description } = req.body;
    const item = await Item.create({ title, description, userId: req.user.id });
    res.json(item);
} catch (err) {
    res.status(500).json({ message: 'Gagal membuat item', error: err.message });
}
};

// UPDATE ITEM
export const updateItem = async (req, res) => {
try {
    const { title, description } = req.body;
    const item = await Item.findOne({ where: { id: req.params.id, userId: req.user.id } });

    if (!item) return res.status(404).json({ message: 'Item tidak ditemukan' });

    item.title = title;
    item.description = description;
    await item.save();

    res.json(item);
} catch (err) {
    res.status(500).json({ message: 'Gagal update item', error: err.message });
}
};

// DELETE ITEM
export const deleteItem = async (req, res) => {
try {
    const deleted = await Item.destroy({ where: { id: req.params.id, userId: req.user.id } });
    if (!deleted) return res.status(404).json({ message: 'Item tidak ditemukan' });

    res.json({ message: 'Item dihapus' });
} catch (err) {
    res.status(500).json({ message: 'Gagal menghapus item', error: err.message });
}
};

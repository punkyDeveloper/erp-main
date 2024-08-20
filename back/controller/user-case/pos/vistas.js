exports.pos = (req, res) => {
    try {
        res.render('pos', { title: 'Página de Inicio' });
    } catch (error) {
        console.error(error);
    }
};
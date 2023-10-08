import { PostModel } from "../models/Post.js"





export const ctrlGetPost = async (req, res) => {
    try {
        const posts = await PostModel.findAll();
        if (!posts || posts.length === 0) { // Verifica si no hay tareas
            return res.status(404).json({ message: "No se encontraron tareas" });
        }
        return res.status(200).json(posts);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Error Server'
        });
    }
}



export const ctrlCreatePost = async (req, res) => {
    try {
        const newPost = await PostModel.create(req.body)
        return res.status (201).json(newPost)

    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Error Server'
        })
    }
}

export const ctrlUpdatePost = async (req, res) => {
    const { id } = req.params
    try {
        const post = await PostModel.findByPk(id)

        if(!post) {
            return res.status(404).json({
                message: 'Tarea no encontrada'
            })
        }

        post.update(req.body)

        return res.status(200).json(post)
    } catch (error) {
        onsole.error(error)
        return res.status(500).json({
            message: 'Error Server'
        })
    }
}

export const ctrlDeletPost = async (req, res) => {
    const { id } = req.params
    try {
        const postDeleted = await PostModel.destroy({
            where:{
                id:id
            }
        })
        if (!postDeleted){
            return res.status(404).json({
                message: "Tarea no encontrada"
            })
        }
        return res.status(200).json({
            message: "Tarea eliminada"
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Error Server'
        })
    }
}
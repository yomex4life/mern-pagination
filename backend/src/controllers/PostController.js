const Post  =require('../models/Post')

module.exports = {
    async getPosts(req, res){
        try {
            let query = Post.find();
            const page = parseInt(req.query.page) || 1;
            const pageSize=parseInt(req.query.limit) || 50;
            const skip = (page -1)* pageSize;
            const total = await Post.countDocuments();

            const pages = Math.ceil(total/pageSize);

            query = query.skip(skip).limit(pageSize);
            if(page > pages)
            {
                res.status(404).json({
                    status: 'Failed',
                    message: "No page found"
                });
            }


            const result = await query
            res.status(200).json({
                status: 'Success',
                count: result.length,
                page,
                pages,
                data: result
            })

        } catch (error) {
            console.log(error)
            res.status(500).json("Server error ");
        }
    }
}
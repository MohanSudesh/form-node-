export default ( parent, args, {Task, request} ) => {
    return Task.find().exec()
}
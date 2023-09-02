//Удаление директории public
const clear=()=>{
    return $.del($.path.root);
}

module.exports = clear;
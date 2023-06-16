import { CategoryService } from "./CategoryService.js";
const { findCategories, findCategoryById } = CategoryService;

const args = process.argv;

async function processarComando() {
  // console.log(args);
  switch (args[2]) {
    case "--listarCategorias":
      // console.log('--listar', args)
      const categories = await findCategories()
      return categories;
    case "--recuperarCategoriaPorId":
      const id = args[3];
      // console.log('--porId', args)
      const category = await findCategoryById(id);
      return category;
    default:
      console.log("default", args);
  }
};

processarComando();
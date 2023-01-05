import { useMemo, useState } from 'react';
import CategorySelect from './category-select';
import styles from "./index.css";

function App() {

  const [parent, setParent] = useState(0);
  const [categoryName, setCategoryName] = useState();
  const [categories, setCategories] = useState([
    {
      id: 1,
      title: "Araç",
      parent: 0,
    },
    {
      id: 2,
      title: "Jip",
      parent: 1,
    },
    {
      id: 3,
      title: "4x4",
      parent: 2,
    },
    {
      id: 4,
      title: "4x2",
      parent: 2,
    }
  ]);

  const filteredCategories = useMemo(() => categories.filter(category => category.parent === parent), [parent, categories]);
  const findCategories = (parent) => {
    if (parent === 0) {
      return [];
    }

    const category = categories.find(category => category.id === parent);
    return [
      category,
      category.parent !== 0 && findCategories(category.parent)];
  }

  const getBreadCrumb = (parent) => {
    return findCategories(parent).flat(Infinity).filter(Boolean).reverse();
  }

  const breadCrumb = useMemo(() => getBreadCrumb(parent), [parent]);

  const submitHandle = e => {
    e.preventDefault();

    setCategories([...categories, {
      id: categories.length + 1,
      name: categoryName,
      parent: 0,
    }])
    setCategoryName('');
  }

  const deleteCategory = id => {
    setCategories(categories.filter(category => category.id !== id));
  }

  const subCategoryHandle = category => {
    setParent(category.id);
  }

  const getSubCategoryCount = (id) => {
    return categories && categories.filter(category => category.parent === id).length || 0;
  }

  return (
    <div className="App">
      <form className='flex gap-x-4 mb-4' onSubmit={submitHandle}>
        <input type="text" value={categoryName} onChange={e => setCategoryName(e.target.value)} className='border flex-1 border-gray-300 h-10 px-4 outline-none focus:border-indigo-600 rounded-md text-sm' placeholder='Kategori' style={{ backgroundColor: "#eee" }} />

        <button disabled={!categoryName} type='submit' className='h-10 bg-indigo-600 text-white px-4 rounded-md disabled:opacity-50 disabled:pointerevents-none'>Ekle</button>
      </form>

      {breadCrumb.length > 0 && (
        <nav className='bg-yellow-50 border border-yellow-600 flex items-center gap-x-4 text-sm'>
          {breadCrumb.map(category => (
            <button onClick={() => setParent(category.parent)}>{category.name}</button>
          ))}
        </nav>
      )}

      {/* <pre>{JSON.stringify(categories, null, 2)}</pre> */}

      <div className='grid gap-y-4'>
        {filteredCategories.map(category => (
          <div key={category.id} className='bg-zinc-100 border border-zinc-400 rounded-md text-sm flex items-center justify-between'>
            {category.name}
            <nav className='flex items-center gap-x-2'>
              <button onClick={() => subCategoryHandle(category)} className='h-7 px-4 rounded bg-indigo-600 text-white'>
                Alt Kategoriler
                ({getSubCategoryCount(category.id)})
                </button>
              <button onClick={() => deleteCategory(category.id)} className='h-7 px-4 rounded bg-red-600 text-white'>Sil</button>
            </nav>
          </div>
        ))}
      </div>

      <CategorySelect categories={categories}/>
    </div>
  );
}

export default App;
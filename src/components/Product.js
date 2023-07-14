import React, { useState } from 'react';

const Product = ({history}) => {
    const [products, setProducts] = useState([
        { id: 1, name: 'product 1', price: 3000 },
        { id: 2, name: 'product 2', price: 3000 },
        { id: 3, name: 'product 3', price: 3000 },
        // ...
    ]);

    const [editingProductId, setEditingProductId] = useState(null);
    const [editedProductName, setEditedProductName] = useState('');
    const [editedProductPrice, setEditedProductPrice] = useState('');

    const handleEdit = (productId) => {
        const productToEdit = products.find((product) => product.id === productId);

        setEditingProductId(productId);
        setEditedProductName(productToEdit.name);
        setEditedProductPrice(productToEdit.price);
    };

    const handleSave = () => {
        const updatedProducts = products.map((product) => {
            if (product.id === editingProductId) {
                return {
                    ...product,
                    name: editedProductName,
                    price: editedProductPrice
                };
            }
            return product;
        });

        console.log(`Saving product with id ${editingProductId}`);
        console.log('Updated product list:', updatedProducts);

        setProducts(updatedProducts);
        cancelEdit();
    };

    const handleCancel = () => {
        console.log('Cancelling edit');
        cancelEdit();
    };

    const cancelEdit = () => {
        setEditingProductId(null);
        setEditedProductName('');
        setEditedProductPrice('');
    };

    const renderEditForm = (productId) => {
        return (
            <div>
                <label>
                    <input
                        type="text"
                        value={editedProductName}
                        onChange={(e) => setEditedProductName(e.target.value)}
                    />
                </label>
                <label>
                    <input
                        type="number"
                        value={editedProductPrice}
                        onChange={(e) => setEditedProductPrice(e.target.value)}
                    />
                </label>
            </div>
        );
    };

    const handleDetail = (productId) => {
        const productToShow = products.find((product) => product.id === productId);
        alert(`Viewing detail of product with id ${productId}\n` +
            'Product name: ' + productToShow.name +
            '\nProduct price: ' + productToShow.price);
        // console.log('Product details:', productToShow);
    };

    const handleDelete = (productId) => {
        const updatedProducts = products.filter((product) => product.id !== productId);
        console.log(`Deleting product with id ${productId}`);
        console.log('Updated product list:', updatedProducts);
        setProducts(updatedProducts);
    };
    const handleSignOut = () => {
        history.push('/');
      };

    return (

        <div className='container'>
            <h2 className='text-center mb-5'>Manage Products</h2>
            <button type="button" class="btn btn-dark" onClick={handleSignOut}>Sign Out</button>
            <table class="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td >{product.id}</td>
                            <td >
                                {editingProductId === product.id ? renderEditForm(product.id) : product.name}
                            </td>
                            <td >
                                {editingProductId === product.id ? '' : product.price}
                                {/* {product.price} */}
                            </td>
                            <td >
                                {editingProductId === product.id ? (
                                    <>
                                        <button onClick={handleSave}>Save</button>
                                        <button onClick={handleCancel}>Cancel</button>
                                    </>
                                ) : (
                                    <button onClick={() => handleEdit(product.id)}>Edit</button>
                                )}
                                <button onClick={() => handleDetail(product.id)}>Detail</button>
                                <button onClick={() => handleDelete(product.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
};


export default Product;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCrocsProductStore } from '../store/useCrocsProductStore';
import { wishListStore } from '../store/wishListStore';
import Title from '../components/Title';
import WishAddPopup from '../components/WishAddPopup';

// const CrocsProductDetail = () => {
//     const { id } = useParams();
//     const { crocsItems, onFetchItems } = useCrocsProductStore();
//     const { onAddWishList } = wishListStore();

//     const [CrocsProduct, setCrocsProduct] = useState(null);

//     useEffect(() => {
//         onFetchItems();
//     }, []);

//     useEffect(() => {
//         if (!id || crocsItems.length === 0) return;

//         const findCrocsItem = crocsItems.find((item) => String(item.id) === String(id));
//         setCrocsProduct(findCrocsItem);
//     }, [id, crocsItems]);

//     if (!CrocsProduct) {
//         return <div>상품 정보를 불러오고 있으니 기다려주세요.</div>;
//     }

//     return (
//         <div className="sub_page">
//             <div className="inner">
//                 <Title title="ProductDeatil" />
//                 <div className="product-detail-wrap">
//                     <p>상품 예시입니당 💚</p>

//                     <div className="img_box">
//                         <img
//                             src={CrocsProduct.product_img.split(',')[0]}
//                             alt={CrocsProduct.product}
//                         />
//                     </div>
//                     <button onClick={() => onAddWishList(CrocsProduct)}>위시버튼💚</button>
//                     <WishAddPopup />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CrocsProductDetail;

const CrocsProductDetail = () => {
    const { id } = useParams();
    const { crocsItems, onFetchItems } = useCrocsProductStore();
    const { onAddWishList } = wishListStore();

    const [CrocsProduct, setCrocsProduct] = useState(null);

    useEffect(() => {
        onFetchItems();
    }, []);

    useEffect(() => {
        if (!id || crocsItems.length === 0) return;

        const findCrocsItem = crocsItems.find((item) => String(item.id) === String(id));
        setCrocsProduct(findCrocsItem);
    }, [id, crocsItems]);

    if (!CrocsProduct) {
        return <div>상품 정보를 불러오고 있으니 기다려주세요.</div>;
    }

    // ⭐ 이미지 타입 관계없이 배열로 통일
    const images = Array.isArray(CrocsProduct.product_img)
        ? CrocsProduct.product_img
        : String(CrocsProduct.product_img)
              .split(',')
              .map((v) => v.trim())
              .filter(Boolean);

    return (
        <div className="sub_page">
            <div className="inner">
                <Title title="ProductDetail" />
                <div className="product-detail-wrap">
                    <div className="img_box">
                        <img src={images[0]} alt={CrocsProduct.product} />
                    </div>

                    <button onClick={() => onAddWishList(CrocsProduct)}>위시버튼💚</button>
                    <WishAddPopup />
                </div>
            </div>
        </div>
    );
};
export default CrocsProductDetail;

import { create } from 'zustand';

export const wishListStore = create((set, get) => ({
    // ========= 위시리스트 담기 =========

    // 위시목록에 저장할 배열
    wishLists: [],
    // 위시 저장 완료 팝업
    popUp: {
        show: false,
        message: '',
    },

    // 위시리스트 저장 메서드
    onAddWishList: (product) => {
        console.log('선택상품 들어왔나?:', product);
<<<<<<< HEAD
<<<<<<< HEAD
        const wish = get().wishLists;
        const existing = wish.find((item) => item.id === product.id);
        if (existing) {
            set({ popUp: { show: true, message: '이미 위시리스트에 담긴 상품입니다 💚' } });
<<<<<<< HEAD
            return false;
        }
=======
        // const wish = get().wishLists;

        // const existing = wish.find((wish) => wish.id === product.id);
        // let updateWish;
        // if (existing) {
        //     set({ popUp: { show: true, message: "이미 위시리스트에 담긴 상품입니다 💚" } });
        //     return false;
        // } else {
        //     updateWish = [...wish, { ...product }];

        //     console.log('선택상품 담겼나?:', wish);
        // }

        // set({ wishLists: updateWish });

        // // set({ popUp: { show: true, message: '장바구니에 담겼습니다! 💚' } });
        // console.log('wishLists에 담긴 것 확인:', get().wishLists);
        // console.log('찜완💚되었으니 계속 개발을 하시어요');
=======
>>>>>>> 93debeb (2025-11-25(화) 초원 - v03)
        const wish = get().wishLists;
        const existing = wish.find((item) => item.id === product.id);
        if (existing) {
            set({ popUp: { show: true, message: '이미 위시리스트에 담긴 상품입니다 💚' } });
            return false;
        }
<<<<<<< HEAD

>>>>>>> 669cad9 (2025-11-25(화) 초원 - feat: 상세페이지 지비츠 연결, 장바구니 팝업...)
=======
>>>>>>> 93debeb (2025-11-25(화) 초원 - v03)
        set({
            wishLists: [...wish, product],
            popUp: { show: true, message: '위시리스트에 추가되었습니다! 💚' },
        });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        console.log('wishLists에 담긴 것 확인:', get().wishLists);
        return true;
=======
>>>>>>> 669cad9 (2025-11-25(화) 초원 - feat: 상세페이지 지비츠 연결, 장바구니 팝업...)
=======
            alert('이미 당신의 위시 속에 쏘옥💚');
=======
>>>>>>> 780a81759eccba996f9bd1cc453c50c360e3b11f
            return false;
        }
<<<<<<< HEAD

        set({ wishLists: updateWish });
        set({ popUp: { show: true, message: '장바구니에 담겼습니다! 💚' } });
=======
>>>>>>> f7a4375 (2025-11-25(화) 초원 - v01)
=======
        set({
            wishLists: [...wish, product],
            popUp: { show: true, message: '위시리스트에 추가되었습니다! 💚' },
        });
>>>>>>> 780a81759eccba996f9bd1cc453c50c360e3b11f
        console.log('wishLists에 담긴 것 확인:', get().wishLists);
        return true;
>>>>>>> ebd2d8f (2025-11-25(화) 초원 - Revert "feat: 상세페이지 지비츠 연결...)
    },

    // 위시 추가 팝업창 끄기
    hidePopup: () => set({ popUp: { show: false, message: '' } }),

    // ======== 위시리스트 데이터 삭제 ========

    // 위시리스트 중 선택된 내역을 저장할 배열
    removeWish: [],

    // 체크박스 체크했을 때 담기
    toggleRemoveWish: (item) => {
        const currentWish = get().removeWish;
        const findSelectWish = currentWish.find((w) => w.id === item.id);

        if (findSelectWish) {
            //이미 있으면 제거
            set({ removeWish: currentWish.filter((w) => w.id !== item.id) });
        } else {
            //없으면 추가
            const newRemoveWish = [...currentWish, item];
            set({ removeWish: newRemoveWish });
            console.log('newRemoveWish체크박스 체크했을 때:', newRemoveWish);
        }
    },

    onRemoveWish: () => {
<<<<<<< HEAD
=======
        // console.log('위시삭제');
        // const wish = get().removeWish;
        // const updateWish = wish.filter((wish) => wish.id !== item.id);
        // set({ removeWish: updateWish });
>>>>>>> 780a81759eccba996f9bd1cc453c50c360e3b11f
        console.log('위시삭제');
        const removeWish = get().removeWish;
        console.log('removeWish 선택된 위시:', removeWish);
        const wishLists = get().wishLists;
        console.log('wishLists 전체위시:', wishLists);

        const updateWishLists = wishLists.filter(
            (wish) => !removeWish.some((r) => r.id === wish.id)
        );

        set({ wishLists: updateWishLists, removeWish: [] });
    },

    addCartWish: [],
    cartWishItems: [],
    cartCount: 0,

    //장바구니 추가 버튼 선택 시 위시리스트에서 지우고 장바구니 배열에 추가
<<<<<<< HEAD
=======

>>>>>>> 780a81759eccba996f9bd1cc453c50c360e3b11f
    onAddCartBtn: () => {
        // 체크된 위시들을 배열로 가져옴
        const removeWish = get().removeWish;
        // 전체 위시리스트
        const wishLists = get().wishLists;
        // 현재 장바구니 목록
        const cartWishItems = get().cartWishItems;

<<<<<<< HEAD
        console.log('🛒 장바구니 추가 버튼:', { removeWish, wishLists, cartWishItems });

=======
>>>>>>> 780a81759eccba996f9bd1cc453c50c360e3b11f
        // 위시리스트에서 선택된 항목 제거
        const newWishLists = wishLists.filter((wish) => !removeWish.some((r) => r.id === wish.id));

        // 장바구니에 선택된 항목 추가
<<<<<<< HEAD
=======
        // 이미 cartWishItems에 있는 동일 상품은 count만 증가
>>>>>>> 780a81759eccba996f9bd1cc453c50c360e3b11f
        const newcartWishItems = [...cartWishItems];

        removeWish.forEach((item) => {
            const existing = newcartWishItems.find((cart) => cart.id === item.id);

            if (existing) {
                existing.count = (existing.count || 1) + (item.count || 1);
            } else {
<<<<<<< HEAD
                newcartWishItems.push({ ...item, count: item.count || 1 });
            }
        });

        console.log('✅ 새로운 cartWishItems:', newcartWishItems);

=======
                newcartWishItems.push({ ...item });
            }
        });

>>>>>>> 780a81759eccba996f9bd1cc453c50c360e3b11f
        // 상태 업데이트
        set({
            wishLists: newWishLists,
            cartWishItems: newcartWishItems,
            cartCount: newcartWishItems.length,
            removeWish: [], // 체크 초기화
<<<<<<< HEAD
            popUp: { show: true, message: '장바구니에 추가되었습니다! 🛒' },
        });
    },

<<<<<<< HEAD
    // ✅ cartItems - 상품 상세에서 직접 장바구니 담기용
    cartItems: [],

    // ✅ 상품 상세에서 장바구니 담기 메서드
    onProductAddCart: (product, count = 1) => {
        console.log('🛒 onProductAddCart 호출:', { product, count });

=======
=======
        });
    },

>>>>>>> 780a81759eccba996f9bd1cc453c50c360e3b11f
    cartItems: [],

    // //진짜 장바구니 버튼 클릭 시 장바구니 추가 메서드 (위시리스트랑 합쳐)

    onProductAddCart: (product, count = 1) => {
<<<<<<< HEAD
>>>>>>> 669cad9 (2025-11-25(화) 초원 - feat: 상세페이지 지비츠 연결, 장바구니 팝업...)
=======
>>>>>>> 780a81759eccba996f9bd1cc453c50c360e3b11f
        const cartItems = get().cartItems;
        const existing = cartItems.find((item) => item.id === product.id);

        let updated;
        if (existing) {
<<<<<<< HEAD
<<<<<<< HEAD
            // 이미 있으면 수량 증가
            updated = cartItems.map((item) =>
                item.id === product.id ? { ...item, count: item.count + count } : item
            );
            console.log('✅ 기존 상품 수량 증가');
        } else {
            // 새로운 상품 추가
            updated = [...cartItems, { ...product, count }];
            console.log('✅ 새 상품 추가');
        }

        console.log('📦 업데이트된 cartItems:', updated);

=======
=======
>>>>>>> 780a81759eccba996f9bd1cc453c50c360e3b11f
            updated = cartItems.map((item) =>
                item.id === product.id ? { ...item, count: item.count + count } : item
            );
        } else {
            updated = [...cartItems, { ...product, count }];
        }

<<<<<<< HEAD
>>>>>>> 669cad9 (2025-11-25(화) 초원 - feat: 상세페이지 지비츠 연결, 장바구니 팝업...)
=======
>>>>>>> 780a81759eccba996f9bd1cc453c50c360e3b11f
        set({
            cartItems: updated,
            cartCount: updated.reduce((sum, item) => sum + item.count, 0),
            popUp: { show: true, message: '장바구니에 담겼습니다! 🛒' },
        });
<<<<<<< HEAD
<<<<<<< HEAD

        return true;
    },

=======
=======
>>>>>>> 780a81759eccba996f9bd1cc453c50c360e3b11f
    },

    // addToCart: (product, count = 1) => {
    //     const cartItems = get().cartItems;
    //     const existing = cartItems.find((item) => item.id === product.id);

    //     let updatedCart;
    //     if (existing) {
    //         updatedCart = cartItems.map((item) =>
    //             item.id === product.id ? { ...item, count: item.count + count } : item
    //         );
    //     } else {
    //         updatedCart = [...cartItems, { ...product, count }];
    //     }

    //     set({
    //         cartItems: updatedCart,
    //         cartCount: updatedCart.reduce((sum, item) => sum + item.count, 0),
    //     });
    //     set({ popUp: { show: true, message: '장바구니에 담겼습니다! 💚' } });

    //     console.log('장바구니 상태:', get().cartItems);

    //     // if (existing) {
    //     //     // 이미 장바구니에 있는 경우 팝업만 띄우고 종료
    //     //     set({ popUp: { show: true, message: '이미 장바구니에 담긴 상품입니다! 🛒' } });
    //     //     return;
    //     // }

    //     // const updatedCart = [...cartItems, { ...product, count }];

    //     // set({
    //     //     cartItems: updatedCart,
    //     //     cartCount: updatedCart.reduce((sum, item) => sum + (item.count || 1), 0),
    //     //     popUp: { show: true, message: '장바구니에 추가되었습니다! 💚' },
    //     // });

    //     // console.log('장바구니 상태:', get().cartItems);
    // },

    // onProductAddCart: (product, count = 1) => {
    //     console.log('상품 상세에서 장바구니:', product);
    //     get().addToCart(product, count);
    // },

<<<<<<< HEAD
>>>>>>> 669cad9 (2025-11-25(화) 초원 - feat: 상세페이지 지비츠 연결, 장바구니 팝업...)
=======
>>>>>>> 780a81759eccba996f9bd1cc453c50c360e3b11f
    // 장바구니 추가 버튼 메서드(위시리스트 목록에서 지우기 )
    // onAddCartBtn: () => {
    //     console.log('장바구니 추가 버튼');
    //     const cartWish = get().removeWish;
    //     console.log('cartWish 카트에 담을 위시:', cartWish);
    //     const wishLists = get().wishLists;
    //     console.log('wishLists 전체위시:', wishLists);

    //     const updateWishCartLists = wishLists.filter(
    //         (wish) => !cartWish.some((r) => r.id === wish.id)
    //     );

    //     set({ wishLists: updateWishCartLists, addCartWish: cartWish, cartWish: [] });

    //     console.log('장바구니 추가');
    //     const addToCartWish = get().addCartWish;
    //     console.log('카트에 담겨있는 위시 내역 확인:', addToCartWish);

    //     //장바구니로 보내기

    //     const addToCartLists = get().addCartWish;
    //     const existing = addToCartLists.find((item) => item.id === product.id);

    //     let updateWishCart;
    //     if (existing) {
    //         updateWishCart = addToCartLists.map((item) =>
    //             item.id === product.id ? { ...item, count: item.count + product.count } : item
    //         );
    //     } else {
    //         updateWishCart = [...addToCartLists, { ...product }];
    //     }

    //     set({
    //         cartWishItems: updateWishCart,
    //         cartCount: updateWishCart.length,
    //     });
    // },

    // 장바구니에 추가하기 (데이터 보내기)
    // onAddToCart: (product) => {
    //     const addToCartLists = get().addCartWish;
    //     const existing = addToCartLists.find((item) => item.id === product.id);

    //     let updateWishCart;
    //     if (existing) {
    //         updateWishCart = addToCartLists.map((item) =>
    //             item.id === product.id ? { ...item, count: item.count + product.count } : item
    //         );
    //     } else {
    //         updateWishCart = [...addToCartLists, { ...product }];
    //     }

    //     set({
    //         cartWishItems: updateWishCart,
    //         cartCount: updateWishCart.length,
    //     });
    // },
}));
import React from 'react';

const Preloader = () => {
    return (
        <>
            <div id="preloader-active">
            <div className="preloader flex-1 content-center">
                <div className="logo absolute inset-y-2/4 jump">
                    <img src="/assets/logo-nama.png" alt="Monst" />
                    {/* <h1 className="text-lg font-semibold">Jalan Dulu</h1> */}
                </div>
            </div>
        </div>
        </>
    );
};

export default Preloader;
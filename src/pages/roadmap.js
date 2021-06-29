import React from 'react';
import Layout from '@theme/Layout';

function Roadmap() {
    return (
        <Layout title="Roadmap">
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '110vh',
                }}>
                <iframe height="100%" width="100%" src="/static/assets/roadmap/index.html"></iframe>
            </div>
        </Layout>
    );
}

export default Roadmap;

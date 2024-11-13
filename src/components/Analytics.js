import React from 'react';

function Analytics(){
    return(
        <div className="mt-4 p-4 bg-black rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Analytics</h2>
            <div className="flex space-x-4">
                <div className="flex-1 bg-blue-400 p-4 rounded text-center">
                    <h3 className="text-lg font-bold">Followers</h3>
                    <p className="text-2xl">1,234</p>
                </div>
                <div className="flex-1 bg-blue-400 p-4 rounded text-center">
                    <h3 className="text-lg font-bold">Engagement</h3>
                    <p className="text-2xl">9.8%</p>
                </div>
            </div>
        </div>
    );
}

export default Analytics;
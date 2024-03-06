import React, { useState, useEffect } from 'react';
import { getCmd, createCmd, deleteCmd, editCmd, getCmds } from '../../services/cmds-api'; 

import { getPod, deletePod, editPod, getPods } from '../../services/pods-api'; // Api to 

const ControlHub: React.FC = () => {
    const [pods, setPods] = useState([]);

    useEffect(() => {
        fetchPods();
    }, []);

    const fetchPods = async () => {
        try {
            const response = await getPods();
            setPods(response.data);
        } catch (error) {
            console.error('Failed to fetch pods:', error);
        }
    };

    const handleDeletePod = async (podId: string) => {
        try {
            await deletePod(podId);
            fetchPods();
        } catch (error) {
            console.error('Failed to delete pod:', error);
        }
    };

    return (
        <div>
            <h1>Kubernetes Control Hub</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {pods.map((pod) => (
                        <tr key={pod.id}>
                            <td>{pod.name}</td>
                            <td>{pod.status}</td>
                            <td>
                                <button onClick={() => handleDeletePod(pod.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export {ControlHub};
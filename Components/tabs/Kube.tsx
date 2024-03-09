import React, { useState, useEffect, useMemo } from 'react';
import { getCmd, createCmd, deleteCmd, editCmd, getCmds } from '../../services/cmds-api'; 
import { Link, Route, Router, Routes } from 'react-router-dom';
import { getPod, deletePod, editPod, getPods, createPod } from '../../services/pods-api'; // Api to 
import { NavigationContainer, createNativeStackNavigator } from '@react-navigation/native';
import NewCommand from './NewCommand';

const ControlHub: React.FC = () => {
    const [pods, setPods] = useState([]);
    const [cmds, setCmds] = useState([]);

    const Stack = createNativeStackNavigator();

    useEffect(() => {
        fetchCmds();
        fetchPods();
    }, []);

    const MemoizedPods = useMemo(() => {
        return pods.map((pod) => (
            <tr key={pod.id}>
                <td>{pod.name}</td>
                <td>{pod.status}</td>
                <td>
                    <NavigationContainer>
                        <Stack.Navigator>
                            <Stack.Screen
                                name="NewCommand"
                                component={NewCommand}
                            />
                        </Stack.Navigator>
                    </NavigationContainer>
                    <button onClick={() => handleDeletePod(pod.id)}>Delete</button>
                </td>
            </tr>
        ));
    }, [pods]);

    const fetchPods = async () => {
        try {
            const response = await getPods();
            setPods(response.data);
        } catch (error) {
            console.error('Failed to fetch pods:', error);
        }
    };
    const fetchCmds = async () => {
        try {
            const response = await getCmds();
            setCmds(response.data);
        } catch (error) {
            console.error('Failed to fetch cmds:', error);
        }
    };

    const handleEditPod = async (podId: string) => {
        try {
            // edit data here
            const data = {name: 'new name', status: 'new status', id: podId};
            //
            
            await editPod(podId);
            fetchPods();
        } catch (error) {
            console.error('Failed to edit pod:', error);
        }
    }

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
            {MemoizedPods.map((pod) => {
                return pod;
            })}
        </div>
    );
};

export {ControlHub};
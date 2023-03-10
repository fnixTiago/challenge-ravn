import React, { useEffect, useState } from 'react'
import Card from '../../components/Card/Card.js'
import { DELETE_TASK_MUTATION } from "../../graphql/deleteTaskMutation"
import { useMutation } from "@apollo/client";

const ListCards = ({ lista, name }) => {
    const [deleteTask, { data, loading, error }] = useMutation(DELETE_TASK_MUTATION);
    const [dataList, setDataList] = useState(null)
    const [loadingList, setLoadingList] = useState(null)
    const [errorList, setErrorList] = useState(null)
    let title = name
    useEffect(() => {
        setDataList(lista.data);
        setLoadingList(lista.loading);
        setErrorList(lista.error);
    }, [lista])

    const deleteTaskSelected = (item) => {
        console.log(item.id)
        deleteTask({
            variables: {
                input: {
                    id: `${item.id}`,
                },
            },
        });
        if(error === undefined) {
            setTimeout(function () {
                window.location.reload();
              }, 1000);
        }
        // console.log("data",data)
    }
    const showList = () => {
        if (loadingList) return (<>Loading...</>)
        if (errorList) return <p>errorList... {errorList.message}</p>;
        return (
            <>
                {
                    dataList?.tasks.map((item, key) => {
                        return (
                            <Card
                                key={key}
                                item={item}
                                actionDelete={deleteTaskSelected}
                            />

                        )
                    })
                }
            </>

        )
    }
    return (
        <div className="my-column">
            <div className="body--l home-title">
                {title}({dataList?.tasks.length})
            </div>
            <div className="list-items">
                {showList()}
            </div>
        </div>
    )
}

export default ListCards
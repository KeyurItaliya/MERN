# MERN

#actions
export function getTasksList(currentPage, limit, searchText, sorting, filter, filter_params, appendData = false, isFrom = '') {
    return (dispatch) =>
        taskService.getTaskList(currentPage, limit, searchText, sorting, filter, filter_params,'', '')
            .then((response) => {
                const { total_record, data } = response;
                if( appendData === true ){
                    dispatch({
                        type: APPEND_DATA_IN_TABLE_TASKS_LIST,
                        payload: data,
                    })
                }
                else{
                    dispatch({
                        type: GET_TASKS_LIST,
                        payload: data,
                    })
                }
                dispatch(setTotalRecordsTasks(total_record));
                dispatch(startApiCallTasksList(false));
                return dispatch(Actions.hideTopLoader());
            }).catch(error => {
                dispatch(Actions.showMessage(error.message));
                dispatch(resetTasksList());
                dispatch(setTotalRecordsTasks(0));
                dispatch(startApiCallTasksList(false));
                return dispatch(Actions.hideTopLoader());
            })
}

#service 

   class taskService 
    getTaskList = ( currentPage , limit, searchText, sorting, filter, filters, isActive, taskId ) => {
        return new Promise((resolve, reject) => {
            const request = axios.get('task/getTask', {
                params: { 'page': currentPage , 'limit': limit,'column_filter':  JSON.stringify(filter), "filter_params": JSON.stringify(filters),'search': searchText, 'sort_by': sorting, 'is_active_list': isActive, 'task_id': taskId  }
            })
            request.then((response) => {
                const { status, message, total_record, data } = response.data;
                if (status) {
                    resolve({ total_record, data });
                } else {
                    reject({ message });
                }
            }).catch((error) => {
                console.log('getTask error ' + error);
                reject({ message: 'Something went wrong!!' });
            })
        });
    };
   }
   const instance = new taskService();

   export default instance;
   
   
   ##react-select-async-paginate
   
   
   multer size set:
        -https://www.jsmount.com/upload-image-in-node-js-with-multer/
        
        new Date(moment.utc(date).format('MM/DD/YYYY'))
   

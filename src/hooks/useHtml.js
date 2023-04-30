import axios from "axios"
import { onLoadData } from "@/store/slice/sigepSlice"
import { useSelector, useDispatch } from "react-redux"

export const useHtml = () => {

    // const {data} = useSelector(state => state.sigep)
    // const dispatch = useDispatch()
    const config = {
        // headers: {Authorization: 'Basic c21hcnRpbmZvOlNtQHJ0MmsyMg=='},
        headers: {
            'Accept': 'application/json',
        },
        auth: {
            username: 'smartinfo',
            password: 'Sm@rt2k22'
        }
    }

    const startGetHtml = async () => {
        try {
            const {data} = axios('https://demos.smartinfo.co/sohohoteleria/api/api.php',config)
            
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }   


    return {
        // data,
        startGetHtml
    }

}
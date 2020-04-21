import React, { useEffect, useState } from 'react';
import {ContentWrapper} from '../../components/Common';
import Table from '../../components/Table';
import Pagination from '../../components/Pagination';
import axios from 'axios';

const ITEMS_PER_PAGE = 20;
const API_GITHUB_URL = 'https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=100';


const Landing = props => {

    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(ITEMS_PER_PAGE);

    useEffect(() => {
        setLoading(true);
        const loadData = async () => {
            const fetched = await axios.get(API_GITHUB_URL);
            
            console.log(fetched.data.items)
            setData(fetched.data.items);
            setLoading(false);
        }
        loadData()
    
    }, []);

    const indexOfLastPost = currentPage * perPage;
    const indexOfFirstPost = indexOfLastPost - perPage;
    const currentData = data.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return <ContentWrapper>
        <Pagination currentPage={currentPage} perPage={perPage} total={data.length} paginate={paginate} />
        <Table indexOfFirstPost={indexOfFirstPost} data={currentData} isLoading={isLoading} />
        <Pagination currentPage={currentPage} perPage={perPage} total={data.length} paginate={paginate} />
    </ContentWrapper>
}


export default Landing;
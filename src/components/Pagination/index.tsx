import { Pagination } from '@mui/material';
import React from 'react';
import Stack from '@mui/material/Stack';

type PaginationType = {
    currentPage: number
    onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void
    pageAmount: number
}


const CustomPagination = React.memo((props: PaginationType) => {
    return (
        <Stack spacing={2}  >
            <Pagination color="primary"
                style={{
                    backgroundColor: 'transparent',
                    borderRadius: "10%",
                    color: "primary",
                    marginTop: "100px",
                    display: "flex",
                    justifyContent: "center",
                }
                }
                page={props.currentPage}
                onChange={props.onPageChange}
                hideNextButton
                hidePrevButton
                count={props.pageAmount}
                shape='rounded'

            />
        </Stack >

    )
})

export default CustomPagination
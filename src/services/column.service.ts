import { axiosWithAuth } from "@/api/interceptors";

export const columnService = {
    async createColumn(data: CreateColumn) {
        const response = await axiosWithAuth.post<CreateColumn>(
            '/columns',
            data
        );

        return response.data;
    },

    async updateColumn(data: UpdateColumn) {
        const response = await axiosWithAuth.patch<UpdateColumn>(
            '/columns',
            data
        );

        return response.data;
    },

    async deleteColumn(data: DeleteColumn) {
        const response = await axiosWithAuth.delete<DeleteColumn>(
            '/columns',
            {
                data,
            }
        );

        return response.data;
    },

    async changeColumnOrder(data: ChangeColumnOrder) {
        const response = await axiosWithAuth.patch<ChangeColumnOrder>(
            '/columns/order',
            data
        );

        return response.data;
    },
}
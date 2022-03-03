


export type registerPageType = {
    isLoading: boolean,
    errors: null | string,
    isSuccess: boolean,
    message: string
};


export const registerPageSelector = (state: { registerPage: registerPageType }) => state.registerPage
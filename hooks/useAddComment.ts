import { useMutation } from "react-query";
import useCommentsContract from "./useCommentsContract";

interface useAddCommentPayload {
    topic: string;
    message: string;
}

const useAddComment = () => {
    const contract = useCommentsContract();
    return useMutation(async ({ topic, message }: useAddCommentPayload) => {
        await contract.addComment(topic, message);
    })
}

export default useAddComment;
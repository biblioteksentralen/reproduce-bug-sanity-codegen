import S from "@sanity/desk-tool/structure-builder";
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

export default () => S.list().title("Base").items([
    ...S.documentTypeListItems().filter(it => it.getId() !== 'schemaWithOrderableField'),
    orderableDocumentListDeskItem({
        type: 'schemaWithOrderableField',
      }),
]);

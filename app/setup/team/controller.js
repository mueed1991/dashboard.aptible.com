import Ember from 'ember';
import PanelTabsControllerMixin from "sheriff/mixins/controllers/panel-tabs";

export default Ember.Controller.extend(PanelTabsControllerMixin, {
  showInviteModal: false,
  panel: 'team'
});
